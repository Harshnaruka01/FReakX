import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  // Load cart from Firestore (for logged-in users) or localStorage (for guests)
  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      try {
        if (currentUser) {
          // Load from Firestore
          const cartDocRef = doc(db, 'carts', currentUser.uid);
          const cartDoc = await getDoc(cartDocRef);
          if (cartDoc.exists()) {
            setCartItems(cartDoc.data().items || []);
          } else {
            // Check if there's a local cart and migrate it
            const localCart = localStorage.getItem('cart');
            if (localCart) {
              const items = JSON.parse(localCart);
              setCartItems(items);
              await setDoc(cartDocRef, { items });
              localStorage.removeItem('cart');
            }
          }
        } else {
          // Load from localStorage for guests
          const localCart = localStorage.getItem('cart');
          if (localCart) {
            setCartItems(JSON.parse(localCart));
          }
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
  }, [currentUser]);

  // Save cart to Firestore or localStorage whenever cartItems change
  useEffect(() => {
    if (loading) return;

    const saveCart = async () => {
      try {
        if (currentUser) {
          // Save to Firestore
          const cartDocRef = doc(db, 'carts', currentUser.uid);
          await setDoc(cartDocRef, { items: cartItems }, { merge: true });
        } else {
          // Save to localStorage for guests
          localStorage.setItem('cart', JSON.stringify(cartItems));
        }
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    };

    saveCart();
  }, [cartItems, currentUser, loading]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            ...product,
            quantity,
          },
        ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price || 0;
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    loading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
