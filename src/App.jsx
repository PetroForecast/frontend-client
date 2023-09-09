import Button from '@mui/material/Button';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainRoutes from './components/MainRoutes';
import DefaultAppBar from './components/DefaultAppBar';
import UserAppBar from './components/UserAppBar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO:
  // Some logic to determine if the user is logged in, e.g., checking a token, etc.
  // Replace this with actual authentication logic.
  // const checkUserLoggedIn = () => {
  //   // Replace this condition with your authentication logic.
  //   if () {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };
  // checkUserLoggedIn();

  // ==========TESTING PURPOSE ONLY START============= //
  useEffect(() => {
    // Simulate a delay
    const delay = setTimeout(() => {
      const fakeAuthToken = localStorage.getItem('authToken');
      // Replace this condition with your actual authentication logic.
      if (fakeAuthToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, 1000); // Simulated 1-second delay

    // Clean up the timeout to avoid memory leaks.
    return () => clearTimeout(delay);
  }, []);
  // ==========TESTING PURPOSE ONLY END============= //

   // Login handler (FIXME with real logic)
   const handleLogin = () => {
    // Set the authentication token and set isLoggedIn to true.
    console.log('Login clicked');
    localStorage.setItem('authToken', 'token');
    setIsLoggedIn(true);
  };

  // Logout handler (FIXME with real logic)
  const handleLogout = () => {
    // Clear the authentication token and set isLoggedIn to false.
    console.log('Logout clicked');
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  // Profile click handler (FIXME with real logic)
  const handleProfileClick = () => {
    // Handle the Profile click event here
    // Navigate to the Profile page
    console.log('Profile clicked');
  };

  // Account click handler (FIXME with real logic)
  const handleAccountClick = () => {
    // Handle the Account click event here
    // Navigate to the Account page
    console.log('Account clicked');
  };

  // Dashboard click handler (FIXME with real logic)
  const handleDashboardClick = () => {
    // Handle the Dashboard click event here
    // Navigate to the Dashboard page
    console.log('Dashboard clicked');
  };
  

  return (
    <>
      {isLoggedIn ? ( <UserAppBar
                      onProfileClick={handleProfileClick}
                      onAccountClick={handleAccountClick}
                      onDashboardClick={handleDashboardClick}
                      onLogout={handleLogout}
      /> ) : ( <DefaultAppBar 
                onLogin={handleLogin}
      /> )}
    </>
  );
}

