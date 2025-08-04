import { Request } from 'express';
import type UserModel from '../models/user';

export interface User {
    id: string;
    name: string;
    email: string;
    bio?: string;
}

export interface Post {
    id: string;
    content: string;
    author: User;
    timestamp: Date;
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    bio?: string;
}

export interface PostRequest {
    content: string;
}

export interface UserProfileResponse {
    user: User;
    posts: Post[];
}

// Extend Express Request to include user
export interface AuthenticatedRequest extends Request {
    user: typeof UserModel.prototype;
}