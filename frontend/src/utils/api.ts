import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

// User Authentication
export const registerUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const loginUser = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

// Posts
export const createPost = async (postData: any, token: string) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, postData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to create post');
    }
};

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch posts');
    }
};

// User Profile
export const getUserProfile = async (userId: string, token?: string) => {
    try {
        const headers: any = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        
        const response = await axios.get(`${API_URL}/users/${userId}`, { headers });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
    }
};

export const getUserPosts = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}/posts`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch user posts');
    }
};