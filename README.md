# OS Lab Quiz - 300 MCQs

Interactive MCQ quiz application for Operating Systems Lab practice.

## Features
- 300 multiple-choice questions
- Instant feedback on answers
- Progress tracking with localStorage
- Question flagging and filtering
- Keyboard navigation (← / →)

## Local Development

### Option 1: Using the Python script
```bash
python run_server.py
```

### Option 2: Using Python's HTTP server directly
```bash
python -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

## Deploying to Render

### Method 1: Using Render Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - OS Lab Quiz"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: os-lab-quiz (or any name you prefer)
     - **Environment**: Python 3
     - **Build Command**: `echo "No build required"`
     - **Start Command**: `python -m http.server 8000`
   - Click "Create Web Service"

3. **Access your app**
   - Render will provide a URL like: `https://os-lab-quiz.onrender.com`
   - Your quiz will be live at that URL!

### Method 2: Using Render Blueprint (render.yaml)

This repo includes a `render.yaml` file for automatic deployment:

1. Push your code to GitHub (same as above)
2. In Render dashboard, click "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect the `render.yaml` and deploy

### Method 3: Static Site Deployment (Fastest)

Since this is a static HTML/JS app, you can use Render's Static Site feature:

1. Push to GitHub
2. In Render: "New +" → "Static Site"
3. Connect your repository
4. Configure:
   - **Build Command**: Leave empty
   - **Publish Directory**: `.` (current directory)
5. Deploy!

## Notes

- The quiz uses browser localStorage to save progress
- All 300 questions are loaded from `questions.js`
- No backend or database required
- Mobile responsive design

## Tech Stack
- Pure HTML, CSS, JavaScript
- No frameworks or build tools required
- Python HTTP server for hosting

---

**Live Demo**: Deploy and add your Render URL here!
