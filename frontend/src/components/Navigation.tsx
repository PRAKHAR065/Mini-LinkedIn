import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navigation.css';

const Navigation: React.FC = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push('/');
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Mini LinkedIn
                </Link>
                
                <div className="nav-links">
                    {isAuthenticated ? (
                        <>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to={`/profile/${user?.id}`} className="nav-link">
                                Profile
                            </Link>
                            <button onClick={handleLogout} className="nav-link logout-btn">
                                Logout
                            </button>
                            <span className="user-name">Welcome, {user?.name}</span>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 