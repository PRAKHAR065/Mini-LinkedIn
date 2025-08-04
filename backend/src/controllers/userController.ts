import { Request, Response } from 'express';
import User from '../models/user';
import Post from '../models/post';

// Fetch user profile by ID
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const posts = await Post.find({ author: userId }).populate('author', 'name email');
        res.status(200).json({ user, posts });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Server error', error: errorMessage });
    }
};

// Get posts by user ID
export const getUserPosts = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const posts = await Post.find({ author: userId })
            .populate('author', 'name email')
            .sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching user posts:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Server error', error: errorMessage });
    }
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { name, bio } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { name, bio }, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Server error', error: errorMessage });
    }
};