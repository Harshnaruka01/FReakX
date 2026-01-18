import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUserProfile } from '../hooks/useUserProfile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UserAccountPage.css';

const UserAccountPage = () => {
  const { currentUser } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useUserProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'India'
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser && !profileLoading) {
      navigate('/login');
    }
  }, [currentUser, profileLoading, navigate]);

  // Populate form when profile loads
  useEffect(() => {
    if (profile) {
      console.log('Profile data received:', profile);
      setFormData({
        displayName: profile.displayName || '',
        phone: profile.phone || '',
        address: {
          street: profile.address?.street || '',
          city: profile.address?.city || '',
          state: profile.address?.state || '',
          zipCode: profile.address?.zipCode || '',
          country: profile.address?.country || 'India'
        }
      });
      console.log('Form data set:', {
        displayName: profile.displayName || '',
        phone: profile.phone || '',
        address: profile.address
      });
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if there are any changes
    if (profile) {
      const hasChanges = 
        formData.displayName !== (profile.displayName || '') ||
        formData.phone !== (profile.phone || '') ||
        formData.address.street !== (profile.address?.street || '') ||
        formData.address.city !== (profile.address?.city || '') ||
        formData.address.state !== (profile.address?.state || '') ||
        formData.address.zipCode !== (profile.address?.zipCode || '') ||
        formData.address.country !== (profile.address?.country || 'India');
      
      if (!hasChanges) {
        setMessage({ type: 'info', text: 'No changes to save.' });
        setIsEditing(false);
        return;
      }
    }
    
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      // Show immediate feedback
      setMessage({ type: 'info', text: 'Saving your changes...' });
      
      await updateProfile(formData);
      
      // Success message
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to update profile. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        displayName: profile.displayName || '',
        phone: profile.phone || '',
        address: {
          street: profile.address?.street || '',
          city: profile.address?.city || '',
          state: profile.address?.state || '',
          zipCode: profile.address?.zipCode || '',
          country: profile.address?.country || 'India'
        }
      });
    }
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  if (profileLoading || !currentUser) {
    return (
      <div className="app-root">
        <Navbar />
        <main className="account-container">
          <div className="loading-message">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar />
      <main className="account-container">
        <div className="account-card">
          <div className="account-header">
            <h2>My Account</h2>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)} 
                className="edit-btn"
              >
                Edit Profile
              </button>
            )}
          </div>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="account-info">
            <div className="info-section">
              <h3>Account Information</h3>
              <div className="info-item">
                <label>Email</label>
                <div className="info-value">{currentUser.email}</div>
                <small>Email cannot be changed</small>
              </div>
            </div>

            {!isEditing ? (
              <>
                <div className="info-section">
                  <h3>Personal Information</h3>
                  <div className="info-item">
                    <label>Full Name</label>
                    <div className="info-value">
                      {formData.displayName || <span className="empty-field">Not provided</span>}
                    </div>
                  </div>
                  <div className="info-item">
                    <label>Phone Number</label>
                    <div className="info-value">
                      {formData.phone || <span className="empty-field">Not provided</span>}
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Address Information</h3>
                  <div className="info-item">
                    <label>Street Address</label>
                    <div className="info-value">
                      {formData.address.street || <span className="empty-field">Not provided</span>}
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-item">
                      <label>City</label>
                      <div className="info-value">
                        {formData.address.city || <span className="empty-field">Not provided</span>}
                      </div>
                    </div>
                    <div className="info-item">
                      <label>State</label>
                      <div className="info-value">
                        {formData.address.state || <span className="empty-field">Not provided</span>}
                      </div>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-item">
                      <label>ZIP Code</label>
                      <div className="info-value">
                        {formData.address.zipCode || <span className="empty-field">Not provided</span>}
                      </div>
                    </div>
                    <div className="info-item">
                      <label>Country</label>
                      <div className="info-value">
                        {formData.address.country || <span className="empty-field">Not provided</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-section">
                  <h3>Personal Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="displayName">Full Name</label>
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Address Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="address.street">Street Address</label>
                    <input
                      type="text"
                      id="address.street"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      placeholder="Enter street address"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="address.city">City</label>
                      <input
                        type="text"
                        id="address.city"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="address.state">State</label>
                      <input
                        type="text"
                        id="address.state"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleInputChange}
                        placeholder="Enter state"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="address.zipCode">ZIP Code</label>
                      <input
                        type="text"
                        id="address.zipCode"
                        name="address.zipCode"
                        value={formData.address.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter ZIP code"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="address.country">Country</label>
                      <input
                        type="text"
                        id="address.country"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleInputChange}
                        placeholder="Enter country"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    onClick={handleCancel}
                    className="cancel-btn"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="save-btn"
                    disabled={saving}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserAccountPage;
