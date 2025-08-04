# Mini LinkedIn-like Community Platform

## Overview
This project is a mini LinkedIn-like community platform that allows users to register, log in, create posts, and view profiles. It is built using a MERN stack (MongoDB, Express, React, Node.js) and provides a simple interface for users to interact with each other.

## Tech Stack
- **Frontend:** React with TypeScript
- **Backend:** Node.js with Express and TypeScript
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS with responsive design

## Features
1. **User Authentication**
   - Register and login using email and password
   - JWT-based authentication
   - User profiles with name, email, and bio
   - Persistent login state

2. **Public Post Feed**
   - Create, read, and display text-only posts
   - Home feed showing author's name and timestamp
   - Real-time post creation
   - Responsive design

3. **Profile Page**
   - View user profiles and their posts
   - User avatars with initials
   - Bio display
   - Post history

4. **Navigation**
   - Responsive navigation bar
   - Authentication-aware navigation
   - User-friendly interface

## Live Demo
- [Live Demo URL](#) - Coming soon

## Admin/Demo User Logins
- **Demo User 1:**
  - Email: demo@example.com
  - Password: password123
- **Demo User 2:**
  - Email: test@example.com
  - Password: test123

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `env.example` to `.env`
   - Update the values in `.env`:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

4. Start the backend server:
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post (requires authentication)

### Users
- `GET /api/users/:userId` - Get user profile and posts
- `GET /api/users/:userId/posts` - Get posts by user

## Project Structure
```
mini-linkedin-community/
├── backend/
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── config/          # Database configuration
│   │   └── app.ts          # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── utils/          # API utilities
│   │   └── App.tsx        # Main app component
│   └── package.json
└── README.md
```

## Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret
4. Deploy

### Frontend Deployment (Vercel)
1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Deploy

## Extra Features (Optional)
- [ ] User profile picture upload
- [ ] Commenting on posts
- [ ] Like functionality for posts
- [ ] Follow/unfollow users
- [ ] Real-time notifications
- [ ] Search functionality
- [ ] Post categories/tags
- [ ] Email verification
- [ ] Password reset functionality

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is licensed under the MIT License.

## Support
If you encounter any issues or have questions, please open an issue on GitHub.

