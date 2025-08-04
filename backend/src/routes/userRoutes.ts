import { Router } from 'express';
import { getUserProfile, getUserPosts } from '../controllers/userController';

const router = Router();

// Route to get user profile by user ID
router.get('/:userId', getUserProfile);

// Route to get posts by user ID
router.get('/:userId/posts', getUserPosts);

export default router;