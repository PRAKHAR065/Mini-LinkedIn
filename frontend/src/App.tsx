import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';

const PrivateRoute: React.FC<{ component: React.ComponentType<any>; path: string; exact?: boolean }> = ({ 
    component: Component, 
    ...rest 
}) => {
    const { isAuthenticated } = useAuth();
    
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

const AppContent: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <div className="app">
                <Navigation />
                <main className="main-content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/profile/:id" component={ProfilePage} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
};

export default App;