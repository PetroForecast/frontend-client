import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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

  //TESTING
    // Load user data from localStorage on initial load
    useEffect(() => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      }
    }, []);


    // Open the login modal
    const openLoginModal = () => {
      setLoginModalOpen(true);
    };

    // Close the login modal
    const closeLoginModal = () => {
      setLoginModalOpen(false);
    };

   // Login handler (FIXME with real auth logic)
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

