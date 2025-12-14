#!/usr/bin/env python3
"""
Flask backend for OS Lab Quiz with user authentication and SQL database.
"""

from flask import Flask, render_template, request, jsonify, session, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os
from datetime import datetime, timedelta

app = Flask(__name__, static_folder='static', template_folder='.')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///quiz.db')

# Fix for PostgreSQL URL (Render uses postgresql://)
if app.config['SQLALCHEMY_DATABASE_URI'].startswith('postgres://'):
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'].replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=7)

db = SQLAlchemy(app)
CORS(app, supports_credentials=True)

# ==================== DATABASE MODELS ====================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    progress = db.relationship('Progress', backref='user', lazy=True, cascade='all, delete-orphan')

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    question_id = db.Column(db.Integer, nullable=False)
    selected = db.Column(db.String(1))  # A, B, C, or D
    checked = db.Column(db.Boolean, default=False)
    result = db.Column(db.String(10))  # "correct" or "wrong"
    flagged = db.Column(db.Boolean, default=False)
    counted_correct = db.Column(db.Boolean, default=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# ==================== ROUTES ====================

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/questions.js')
def questions():
    return send_from_directory('.', 'questions.js', mimetype='application/javascript')

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

# ==================== AUTH API ====================

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not username or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already exists'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 400

    password_hash = generate_password_hash(password)
    user = User(username=username, email=email, password_hash=password_hash)
    
    db.session.add(user)
    db.session.commit()

    session['user_id'] = user.id
    session.permanent = True

    return jsonify({
        'success': True,
        'user': {'id': user.id, 'username': user.username, 'email': user.email}
    })

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username', '').strip()
    password = data.get('password', '')

    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Invalid username or password'}), 401

    session['user_id'] = user.id
    session.permanent = True

    return jsonify({
        'success': True,
        'user': {'id': user.id, 'username': user.username, 'email': user.email}
    })

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'success': True})

@app.route('/api/me', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'authenticated': False}), 401

    user = User.query.get(user_id)
    if not user:
        session.pop('user_id', None)
        return jsonify({'authenticated': False}), 401

    return jsonify({
        'authenticated': True,
        'user': {'id': user.id, 'username': user.username, 'email': user.email}
    })

# ==================== PROGRESS API ====================

@app.route('/api/progress', methods=['GET'])
def get_progress():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not authenticated'}), 401

    progress_data = Progress.query.filter_by(user_id=user_id).all()
    
    result = {}
    for p in progress_data:
        result[p.question_id] = {
            'selected': p.selected,
            'checked': p.checked,
            'result': p.result,
            'flagged': p.flagged,
            'countedCorrect': p.counted_correct
        }

    return jsonify({'progress': result})

@app.route('/api/progress/<int:question_id>', methods=['POST'])
def update_progress(question_id):
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not authenticated'}), 401

    data = request.get_json()
    
    progress = Progress.query.filter_by(user_id=user_id, question_id=question_id).first()
    
    if not progress:
        progress = Progress(user_id=user_id, question_id=question_id)
        db.session.add(progress)

    progress.selected = data.get('selected')
    progress.checked = data.get('checked', False)
    progress.result = data.get('result')
    progress.flagged = data.get('flagged', False)
    progress.counted_correct = data.get('countedCorrect', False)

    db.session.commit()

    return jsonify({'success': True})

@app.route('/api/progress/reset', methods=['POST'])
def reset_all_progress():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not authenticated'}), 401

    Progress.query.filter_by(user_id=user_id).delete()
    db.session.commit()

    return jsonify({'success': True})

@app.route('/api/progress/<int:question_id>/reset', methods=['POST'])
def reset_question_progress(question_id):
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not authenticated'}), 401

    Progress.query.filter_by(user_id=user_id, question_id=question_id).delete()
    db.session.commit()

    return jsonify({'success': True})

# ==================== INIT DB ====================

@app.before_first_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port, debug=True)
