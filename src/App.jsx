/*TODO: 
- role based user authentication
- some logic to determine if the user is logged in, e.g., checking a token, etc.
*/

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DefaultAppBar from './components/DefaultAppBar';
import UserAppBar from './components/UserAppBar';
import UserProfile from './components/UserProfile';
import HomePage from './pages/HomePage';
import Dashboard from './containers/Dashboard';
import LoginModal from './components/LoginModal';
import RegistrationModal from './components/RegistrationModal';
import { dummyUsers } from './data/users';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  //TESTING
  // Load user data from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Open the registration modal
  const openRegistrationModal = () => {
    setRegistrationModalOpen(true);
  };

  // Close the registration modal
  const closeRegistrationModal = () => {
    setRegistrationModalOpen(false);
  };

  //FIXME (with real registration logic)
  const handleRegistration = (username, password) => {
    const userExists = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (userExists) {
      // FIXME
      // Handle registration failure
      alert('Failed to register');
      console.log('Failed to register');
    }
    else {
      // FIXME
      // Insert data into database
      // After client registers they should login first to complete the profile
      alert('Successfully registered user');
      console.log('Successfully registered user');
      navigate('/');

    }
  }

  // Open the login modal
  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  // Close the login modal
  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  //FIXME (with real auth logic)
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

      // Save user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      //console.log(localStorage.getItem('currentUser'))
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
    // Clear user data from localStorage
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate('/')
  };


  // Profile click handler
  const handleProfileClick = () => {
    // Handle the Profile click event here
    // Navigate to the Profile page
    console.log('Profile clicked');
    navigate('/profile')
  };


  // Dashboard click handler
  const handleDashboardClick = () => {
    // Handle the Dashboard click event here
    // Navigate to the Dashboard page
    console.log('Dashboard clicked');
    navigate('/dashboard')
  };


  return (
    <>
      {isLoggedIn ? (<UserAppBar
        onProfileClick={handleProfileClick}
        onDashboardClick={handleDashboardClick}
        onLogout={handleLogout}
      />) : (<DefaultAppBar
        onLogin={openLoginModal}
        onRegistration={openRegistrationModal}
      />)}

      <LoginModal
        open={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={handleLogin}
      />

      <RegistrationModal
        open={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
        onRegistration={handleRegistration}
      />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <UserProfile user={currentUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard user={currentUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </>
  );
}

