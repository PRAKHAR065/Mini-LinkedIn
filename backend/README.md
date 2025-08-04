# Mini LinkedIn-like Community Platform - Backend

## Stack Used
- **Frontend**: React
- **Backend**: Node.js (Express)
- **Database**: MongoDB

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/mini-linkedin-community.git
   cd mini-linkedin-community/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The backend server will start on `http://localhost:5000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Posts**
  - `GET /api/posts` - Get all posts
  - `POST /api/posts` - Create a new post

- **User Profiles**
  - `GET /api/users/:id` - Get user profile by ID
  - `GET /api/users/:id/posts` - Get posts by user ID

## Admin/Demo User Logins
- **Admin User**
  - Email: admin@example.com
  - Password: admin123

- **Demo User**
  - Email: demo@example.com
  - Password: demo123

## Extra Features (Optional)
- User profile picture upload
- Post editing and deletion
- Commenting on posts
- Like functionality for posts

Feel free to explore and contribute to the project!