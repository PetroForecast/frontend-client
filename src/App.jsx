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
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import DemoPage from './pages/DemoPage';
//import { dummyUsers } from './data/users';
import ProfileCompletionForm from "./components/ProfileCompletionForm";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//add dummy users to local storage-->
// if (localStorage.getItem("users")) {//do nothing
// }
// else {
//   localStorage.setItem('users', JSON.stringify(dummyUsers));
// }

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // made isloggedin null, on render, it would render defualt with loader
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Add profile completion state (FIXME: backend implementation)
  const [isProfileComplete, setProfileComplete] = useState(null);
  const navigate = useNavigate();

  const openRegistrationModal = () => {
    setRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setRegistrationModalOpen(false);
  };

  const handleRegistration = async (username, password) => {
    try {
      const response = await axios.get(`https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/check/${username}`)
      //console.log(response);
      if (response.status === 200 && response.data.available) {
        alert("Successfully registered user, Please login to continue");
        console.log("Successfully registered user");
        const registrationResponse = await axios.post('https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/register', {
          username: username,
          password: password,
        });
        console.log('User registered:', registrationResponse);

        navigate("/");
      }

    } catch (error) {
      alert("Failed to register, username is already taken.")
      console.error('Registration failed:', error);
    }
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  // Login handler
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/login',
        { username, password });
      console.log(response.data);
      if (response.data) {
        setIsLoggedIn(true);
        setCurrentUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        //console.log((JSON.parse((localStorage.getItem("currentUser"))).isComplete));
        let profileComplete = JSON.parse((localStorage.getItem("currentUser"))).isComplete;
        if (profileComplete === 'false') {
          setProfileComplete(false);
        } else {
          setProfileComplete(true);
        }
        if (!isProfileComplete) {
          navigate("/profile-completion");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      alert("Failed to login")
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    navigate("/profile");
  };

  const handleDashboardClick = () => {
    console.log("Dashboard clicked");
    navigate("/dashboard");
  };

  const handleProfileCompletion = (profileComplete) => {
    setProfileComplete(profileComplete);
    localStorage.setItem("profileCompleted", profileComplete ? "true" : "false");
  };

  const handleUpdateProfile = (updatedUser) => {
    console.log("Profile update action", updatedUser);
    setCurrentUser(updatedUser);
  };

  return (
    document.body.style.backgroundColor = '#bae6fd',
    <div>

      {isLoggedIn == null ? (
        <DefaultAppBar
          isLoggedInNull={false}
          onLogin={openLoginModal}
          onRegistration={openRegistrationModal}
        />
      ) : (
        isLoggedIn === true ? (
          <UserAppBar
            onProfileClick={handleProfileClick}
            onDashboardClick={handleDashboardClick}
            onLogout={handleLogout}
          />
        ) : (
          <DefaultAppBar
            isLoggedInNull={false}
            onLogin={openLoginModal}
            onRegistration={openRegistrationModal}
          />
        )
      )}

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
              <UserProfile user={currentUser} onUpdateProfile={handleUpdateProfile} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/profile-completion"
          element={
            isLoggedIn ? (
              isProfileComplete ? ( // Redirect to dashboard if profile is complete
                <Navigate to="/dashboard" />
              ) : (
                <ProfileCompletionForm onComplete={handleProfileCompletion} /> // Show profile completion form
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              isProfileComplete ? ( // Redirect to dashboard if profile is complete
                <Dashboard user={currentUser} />
              ) : (
                <Navigate to="/profile-completion" /> // Nav to completion form
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
