# OS Lab Quiz - 300 MCQs with User Accounts

Interactive MCQ quiz application for Operating Systems Lab practice with user authentication and cloud-based progress tracking.

## Features
- 🔐 **User Authentication** - Sign up and login system
- ☁️ **Cloud Storage** - Progress saved in SQL database
- 📊 **Individual Progress Tracking** - Each user has separate progress
- 300 multiple-choice questions
- Instant feedback on answers
- Question flagging and filtering
- Keyboard navigation (← / →)
- Mobile responsive design

## Local Development

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Flask Server
```bash
python app.py
```

Then open your browser to: **http://localhost:8000**

The app will create a local SQLite database (`quiz.db`) for testing.

## Deploying to Render

### Method 1: Using Render Dashboard with PostgreSQL (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add user authentication and database"
   git push origin main
   ```

2. **Create a PostgreSQL Database**
   - Go to [render.com](https://render.com) → Dashboard
   - Click "New +" → "PostgreSQL"
   - Configure:
     - **Name**: `os-quiz-db`
     - **Database**: `quiz_db`
     - **User**: `quiz_user`
     - **Region**: Choose closest to you
     - **Plan**: Free tier
   - Click "Create Database"
   - **Copy the Internal Database URL** (starts with `postgresql://`)

3. **Deploy Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `os-lab-quiz`
     - **Environment**: Python 3
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `gunicorn app:app`
   - Add Environment Variables:
     - `SECRET_KEY`: Click "Generate" for a random secure key
     - `DATABASE_URL`: Paste the PostgreSQL Internal Database URL from step 2
   - Click "Create Web Service"

4. **Access your app**
   - Render will provide a URL like: `https://os-lab-quiz.onrender.com`
   - First visit may take 1-2 minutes (free tier cold start)

### Method 2: Using Render Blueprint (render.yaml)

This repo includes a `render.yaml` file for automatic deployment:

1. Push to GitHub
2. In Render dashboard: "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically:
   - Create the PostgreSQL database
   - Deploy the web service
   - Link them together

## First Time Usage

1. Visit your deployed app URL
2. You'll see a login screen
3. Click "Sign up" to create your account
4. Start practicing! Your progress is saved automatically

## Database Schema

**Users Table:**
- id, username, email, password_hash, created_at

**Progress Table:**
- id, user_id, question_id, selected, checked, result, flagged, counted_correct, updated_at

## API Endpoints

### Authentication
- `POST /api/signup` - Create new account
- `POST /api/login` - Login
- `POST /api/logout` - Logout
- `GET /api/me` - Get current user

### Progress
- `GET /api/progress` - Get all progress for current user
- `POST /api/progress/<question_id>` - Update progress for a question
- `POST /api/progress/reset` - Reset all progress
- `POST /api/progress/<question_id>/reset` - Reset single question

## Tech Stack
- **Frontend**: Pure HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Database**: PostgreSQL (production), SQLite (development)
- **Authentication**: Session-based with secure password hashing
- **Deployment**: Render with Gunicorn

## Security Features
- Password hashing with Werkzeug
- Session-based authentication
- CORS protection
- SQL injection protection (SQLAlchemy ORM)
- Secure secret key for production

## Notes
- Free tier on Render may have cold starts (30-60 seconds first visit)
- Database is automatically backed up by Render
- Each user's progress is completely separate
- Sessions last 7 days (configurable)

---

**Live Demo**: Add your Render URL here after deployment!
