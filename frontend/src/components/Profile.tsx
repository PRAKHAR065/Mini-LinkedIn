import React from 'react';
import './Profile.css';

interface User {
    _id: string;
    name: string;
    email: string;
    bio?: string;
}

interface ProfileProps {
    user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="profile-info">
                    <h1 className="profile-name">{user.name}</h1>
                    <p className="profile-email">{user.email}</p>
                </div>
            </div>
            
            {user.bio && (
                <div className="profile-bio">
                    <h3>About</h3>
                    <p>{user.bio}</p>
                </div>
            )}
            
            {!user.bio && (
                <div className="profile-bio">
                    <p className="no-bio">No bio available</p>
                </div>
            )}
        </div>
    );
};

export default Profile;