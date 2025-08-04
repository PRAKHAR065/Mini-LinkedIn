import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PostFeed from '../components/PostFeed';
import PostForm from '../components/PostForm';
import { fetchPosts } from '../utils/api';
import './Home.css';
import { Post } from '../types';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    const handlePostCreated = (newPost: Post) => {
        setPosts([newPost, ...posts]);
    };

    if (loading) {
        return (
            <div className="home-container">
                <div className="loading">Loading posts...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="home-container">
                <div className="error">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to Mini LinkedIn</h1>
                <p>Connect with professionals and share your thoughts</p>
                {isAuthenticated && (
                    <div className="post-form-container">
                        <h2>Create a Post</h2>
                        <PostForm onPostCreated={handlePostCreated} />
                    </div>
                )}
                <div className="posts-section">
                    <h2>Recent Posts</h2>
                    <PostFeed posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default Home;