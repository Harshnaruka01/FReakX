import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export const useUserProfile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user profile from Firestore
  useEffect(() => {
    if (!currentUser) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const loadProfile = async () => {
      try {
        setLoading(true);
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const profileData = userDoc.data();
          console.log('Profile loaded from Firestore:', profileData);
          setProfile(profileData);
        } else {
          // Create initial profile if it doesn't exist
          const initialProfile = {
            email: currentUser.email,
            displayName: currentUser.displayName || '',
            phone: '',
            address: {
              street: '',
              city: '',
              state: '',
              zipCode: '',
              country: 'India'
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await setDoc(userDocRef, initialProfile);
          setProfile(initialProfile);
        }
        setError(null);
      } catch (err) {
        console.error('Error loading profile:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [currentUser]);

  // Update user profile
  const updateProfile = async (profileData) => {
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const updatedData = {
        ...profileData,
        updatedAt: new Date().toISOString()
      };
      
      // Optimistically update local state first for instant feedback
      setProfile(prev => ({ ...prev, ...updatedData }));
      
      // Then update Firestore
      await updateDoc(userDocRef, updatedData);
      setError(null);
      return true;
    } catch (err) {
      console.error('Error updating profile:', err);
      // Revert optimistic update on error
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (userDoc.exists()) {
        setProfile(userDoc.data());
      }
      setError(err.message);
      throw err;
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile
  };
};
