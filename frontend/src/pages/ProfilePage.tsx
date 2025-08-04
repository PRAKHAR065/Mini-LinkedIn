import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../utils/api';
import Profile from '../components/Profile';
import PostFeed from '../components/PostFeed';
import './ProfilePage.css';

interface User {
    _id: string;
    name: string;
    email: string;
    bio?: string;
}

interface UserProfile {
    user: User;
    posts: any[];
}

const ProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                setError('');
                const data = await getUserProfile(id);
                setUserProfile(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUserProfile();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="profile-page">
                <div className="loading">Loading profile...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-page">
                <div className="error">Error: {error}</div>
            </div>
        );
    }

    if (!userProfile) {
        return (
            <div className="profile-page">
                <div className="error">User not found</div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-container">
                <Profile user={userProfile.user} />
                <div className="user-posts-section">
                    <h2>{userProfile.user.name}'s Posts</h2>
                    <PostFeed posts={userProfile.posts} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;