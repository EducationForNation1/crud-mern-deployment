# MERN CRUD App (Simple)

This is a minimal MERN stack CRUD application (MongoDB, Express, React, Node).
Use it as a starter template to deploy or extend.

## Quick setup (local)

1. Install MongoDB or use a cloud MongoDB (MongoDB Atlas).
2. Clone / unzip this project.
3. Backend:
   - cd backend
   - create a `.env` file with:
     ```
     MONGODB_URI=mongodb://localhost:27017/mern_crud_db
     PORT=5000
     ```
   - npm install
   - node server.js
4. Frontend:
   - cd frontend
   - npm install
   - npm start
5. Open http://localhost:3000

## Deploy
- Deploy backend to a service like Render, Heroku, Railway, or your VPS. Set the `MONGODB_URI` env var there.
- Build frontend (`npm run build`) and serve static files, or deploy frontend to Vercel/Netlify and set API url to your backend URL.

## Project structure
- backend/: Express API
- frontend/: React app (created with simple setup)

Enjoy! — Generated for you.
