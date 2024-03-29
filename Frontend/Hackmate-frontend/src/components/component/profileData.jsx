import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Or use document.cookie

function getUserCookie() {
  const token = Cookies.get('hackMateCookie');
  return token;
}

async function fetchUserData(token) {
    try {
      const response = await fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  useEffect(() => {
    const token = getUserCookie();
    if (token) {
      fetchUserData(token);
    }
  }, [isLoggedIn]); // Re-fetch on login state change
  
const UserContext = createContext(null);

export function profileData() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = getUserCookie();
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  // ... rest of your component

  return (
    <UserContext.Provider value={{ isLoggedIn, userData, setUserData }}>
      {/* Other app components */}
      {isLoggedIn && <ProfileComponent user={userData} />}
    </UserContext.Provider>
  );
}
