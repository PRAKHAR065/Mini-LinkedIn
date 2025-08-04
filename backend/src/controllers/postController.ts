import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../types';
import Post from '../models/post';
import User from '../models/user';

// Create a new post
export const createPost = async (req: Request, res: Response) => {
    const { content } = req.body;
    const userReq = req as AuthenticatedRequest;
    const author = userReq.user._id; // User ID from auth middleware
    if (!content || typeof content !== 'string' || !content.trim()) {
        return res.status(400).json({ message: 'Content is required.' });
    }
    try {
        const newPost = new Post({ content, author });
        await newPost.save();
        
        // Populate author details
        await newPost.populate('author', 'name email');
        
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Error creating post', error: errorMessage });
    }
};

// Get all posts
export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find()
            .populate('author', 'name email')
            .sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Error fetching posts', error: errorMessage });
    }
};

// Get a single post by ID
export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('author', 'name email');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error('Error fetching post:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Error fetching post', error: errorMessage });
    }
};