import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { createPost } from '../utils/api';
import './PostForm.css';

interface PostFormProps {
    onPostCreated?: (post: any) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const { token } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        try {
            setIsSubmitting(true);
            setError('');
            const newPost = await createPost({ content: content.trim()}, token!);
            setContent('');
            if (onPostCreated) {
                onPostCreated(newPost);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    required
                    className="post-textarea"
                    rows={4}
                    maxLength={500}
                />
                <div className="char-count">
                    {content.length}/500 characters
                </div>
            </div>
            
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            
            <button 
                type="submit" 
                disabled={isSubmitting || !content.trim()}
                className="submit-btn"
            >
                {isSubmitting ? 'Posting...' : 'Post'}
            </button>
        </form>
    );
};

export default PostForm;