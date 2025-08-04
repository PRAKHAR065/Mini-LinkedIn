import React from 'react';
import { Link } from 'react-router-dom';
import './PostFeed.css';

interface Post {
    _id: string;
    content: string;
    author: {
        _id: string;
        name: string;
        email: string;
    };
    createdAt: string;
}

interface PostFeedProps {
    posts: Post[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
    if (posts.length === 0) {
        return (
            <div className="post-feed">
                <div className="no-posts">
                    <p>No posts yet. Be the first to share something!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="post-feed">
            {posts.map((post) => (
                <div key={post._id} className="post-card">
                    <div className="post-header">
                        <Link to={`/profile/${post.author._id}`} className="author-name">
                            {post.author.name}
                        </Link>
                        <span className="post-time">
                            {new Date(post.createdAt).toLocaleDateString()} at{' '}
                            {new Date(post.createdAt).toLocaleTimeString()}
                        </span>
                    </div>
                    <div className="post-content">
                        {post.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;