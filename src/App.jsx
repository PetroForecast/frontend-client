import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DefaultAppBar from './components/DefaultAppBar';
import UserAppBar from './components/UserAppBar';
import UserProfile from './components/UserProfile';
import HomePage from './pages/HomePage';
import Dashboard from './containers/Dashboard';
import LoginModal from './components/LoginModal';
import { dummyUsers } from './data/users';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  // TODO:
  // Some logic to determine if the user is logged in, e.g., checking a token, etc.

  // ==========TESTING PURPOSE ONLY START============= //
  // useEffect(() => {
  //   // Simulate a delay
  //   const delay = setTimeout(() => {
  //     const fakeAuthToken = localStorage.getItem('authToken');
  //     // Replace this condition with your actual authentication logic.
  //     if (fakeAuthToken) {
  //       setIsLoggedIn(true);



  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   }, 1000); // Simulated 1-second delay

  //   // Clean up the timeout to avoid memory leaks.
  //   return () => clearTimeout(delay);
  // }, []);
  // ==========TESTING PURPOSE ONLY END============= //

    // Open the login modal
    const openLoginModal = () => {
      setLoginModalOpen(true);
    };

    // Close the login modal
    const closeLoginModal = () => {
      setLoginModalOpen(false);
    };

   // Login handler
    const handleLogin = (username, password) => {
      // Simulate authentication by checking against dummy user data
      const user = dummyUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // If authentication succeeds, set the user as the current user
        setIsLoggedIn(true);
        setCurrentUser(user);
        navigate('/dashboard'); // Navigate to the dashboard after successful login
      } else {
        // Handle login failure (e.g., show an error message)
        console.log('Failed to login')
      }
    };

  // Logout handler (FIXME with real logic)
  const handleLogout = () => {
    // Clear the authentication token and set isLoggedIn to false.
    console.log('Logout clicked');
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate('/')
  };

  // Profile click handler (FIXME with real logic)
  const handleProfileClick = () => {
    // Handle the Profile click event here
    // Navigate to the Profile page
    console.log('Profile clicked');
    navigate('/profile')
  };


  // Dashboard click handler (FIXME with real logic)
  const handleDashboardClick = () => {
    // Handle the Dashboard click event here
    // Navigate to the Dashboard page
    console.log('Dashboard clicked');
    navigate('/dashboard')
  };
  

  return (
    <>
      {isLoggedIn ? ( <UserAppBar
                      onProfileClick={handleProfileClick}
                      onDashboardClick={handleDashboardClick}
                      onLogout={handleLogout}
      /> ) : ( <DefaultAppBar 
                onLogin={openLoginModal}
      /> )}

      <LoginModal
        open={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={handleLogin}
      />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

    </>
  );
}

