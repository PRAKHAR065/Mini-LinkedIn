import { Router } from 'express';
// import { registerUser, loginUser } from '../controllers/authController';
import { register, login } from '../controllers/authController';
const router = Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

export default router;