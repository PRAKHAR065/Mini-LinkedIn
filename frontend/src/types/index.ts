export interface User {
    _id: string;
    name: string;
    email: string;
    bio?: string;
}

export interface Post {
    _id: string;
    content: string;
    author: User;
    createdAt: string; // or Date, depending on backend
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    bio?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}