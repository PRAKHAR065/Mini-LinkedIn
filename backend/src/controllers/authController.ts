import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use environment variable

export const register = async (req: Request, res: Response) => {
    const { name, email, password, bio } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, bio });
        await newUser.save();
        
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ 
            message: 'User registered successfully',
            token,
            user: { 
                id: newUser._id, 
                name: newUser.name, 
                email: newUser.email, 
                bio: newUser.bio 
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Error registering user', error: errorMessage });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ 
            token, 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email, 
                bio: user.bio 
            } 
        });
    } catch (error) {
        console.error('Login error:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ message: 'Error logging in', error: errorMessage });
    }
};