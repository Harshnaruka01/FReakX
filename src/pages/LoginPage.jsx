import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiUser, FiPhone, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin) {
      if (password !== confirmPassword) {
        return setError('Passwords do not match');
      }
      
      if (password.length < 6) {
        return setError('Password must be at least 6 characters');
      }
      
      if (!username.trim()) {
        return setError('Username is required');
      }
      
      // Basic username validation
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      if (!usernameRegex.test(username)) {
        return setError('Username can only contain letters, numbers, and underscores');
      }
      
      if (username.length < 3 || username.length > 20) {
        return setError('Username must be between 3 and 20 characters');
      }
    } else {
      if (password.length < 6) {
        return setError('Password must be at least 6 characters');
      }
    }

    try {
      setLoading(true);
      if (isLogin) {
        await login(email, password);
        console.log('Login successful');
      } else {
        await signup(email, password, username.trim());
        console.log('Signup successful');
      }
      navigate('/');
    } catch (err) {
      console.error('Authentication error:', err);
      // Provide user-friendly error messages
      let errorMessage = 'Failed to authenticate';
      if (err.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email. Please sign up first.';
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (err.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please login instead.';
      } else if (err.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Please use at least 6 characters.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address. Please check your email.';
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = 'Email/Password authentication is not enabled. Please contact support.';
      } else if (err.code === 'auth/network-request-failed') {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      await signInWithGoogle();
      console.log('Google sign-in successful');
      navigate('/');
    } catch (err) {
      console.error('Google sign-in error:', err);
      let errorMessage = 'Failed to sign in with Google';
      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Sign-in popup was closed. Please try again.';
      } else if (err.code === 'auth/popup-blocked') {
        errorMessage = 'Popup was blocked. Please allow popups and try again.';
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = 'Google sign-in is not enabled. Please contact support.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-root">
      <Navbar />
      <div className="auth-container">
        <div className={`auth-card ${isLogin ? 'login' : 'signup'}`}>
          <div className="auth-header">
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p>{isLogin ? 'Sign in to continue to FReakX' : 'Join us to get started'}</p>
          </div>
          
          {error && (
            <div className="error-message">
              <span>⚠️</span> {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin ? (
              <>
                <div className="form-group">
                  <div className="input-group">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength="3"
                      maxLength="20"
                      pattern="[a-zA-Z0-9_]+"
                      title="Username can only contain letters, numbers, and underscores"
                      placeholder="Choose a username"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-group">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email address"
                      className="form-input"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="form-group">
                <div className="input-group">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                    className="form-input"
                  />
                </div>
              </div>
            )}
            
            <div className="form-group">
              <div className="input-group">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                  placeholder="Password"
                  className="form-input"
                />
              </div>
              {!isLogin && (
                <span className="input-hint">Use at least 6 characters</span>
              )}
            </div>
            
            {!isLogin && (
              <div className="form-group">
                <div className="input-group">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm password"
                    className="form-input"
                  />
                </div>
              </div>
            )}
            
            <button 
              type="submit" 
              className={`submit-btn ${loading ? 'loading' : ''}`} 
              disabled={loading}
            >
              <span>{loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}</span>
              {!loading && <FiArrowRight className="btn-icon" />}
              {loading && <div className="spinner"></div>}
            </button>
          </form>
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <button 
            className="social-btn google-btn" 
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <FcGoogle className="social-icon" />
            <span>Continue with Google</span>
          </button>
          
          <p className="auth-footer">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }}
              className="toggle-link"
              disabled={loading}
            >
              {isLogin ? ' Sign up' : ' Sign in'}
            </button>
          </p>
        </div>
        
        <div className="auth-illustration">
          <div className="illustration-content">
            <h2>{isLogin ? 'Hello, Friend!' : 'Welcome Back!'}</h2>
            <p>
              {isLogin 
                ? 'Enter your personal details and start your journey with us' 
                : 'To keep connected with us, please login with your personal info'}
            </p>
            <button 
              className="ghost-btn"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }}
              disabled={loading}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
