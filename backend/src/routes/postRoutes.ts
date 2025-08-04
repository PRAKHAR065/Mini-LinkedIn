import { Router } from 'express';
import { createPost, getPosts } from '../controllers/postController';
import authMiddleware from '../middleware/authMiddleware';
// ...existing code...
const router = Router();

// Route to create a new post
router.post('/', authMiddleware, createPost);

// Route to get all posts
router.get('/', getPosts);

export default router;