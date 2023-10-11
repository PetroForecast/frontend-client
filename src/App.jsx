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
import { dummyUsers } from './data/users';
import ProfileCompletionForm from "./components/ProfileCompletionForm";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//add dummy users to local storage-->
if (localStorage.getItem("users")) {//do nothing
}
else {
  localStorage.setItem('users', JSON.stringify(dummyUsers));
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // made isloggedin null, on render, it would render defualt with loader
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Add profile completion state (FIXME: backend implementation)
  const [isProfileComplete, setProfileComplete] = useState(null);
  const navigate = useNavigate();
  const currentUsers = JSON.parse(localStorage.getItem('users'))

  //TESTING
  // Load user data from localStorage on initial load
  // useEffect(() => {

  //   //FIXME: add real logic to check database if the profile was complete here

  //   const storedUser = localStorage.getItem("currentUser");
  //   const storedProfileCompleted = localStorage.getItem("profileCompleted");
  //   if (storedUser) {
  //     setCurrentUser(JSON.parse(storedUser));
  //     setIsLoggedIn(true);
  //     setProfileComplete(storedProfileCompleted === "true");
  //     // setProfileComplete(userHasCompletedProfile);
  //   }
  //   else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

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
    const userExists = currentUsers.find((u) => u.username === username);

    if (userExists) {
      // FIXME
      // Handle registration failure
      alert("Failed to register");
      console.log("Failed to register");

    } else {
      // FIXME
      // Insert data into database
      // After client registers they should login first to complete the profile

      //TEMPORARY SOLUTION
      //retrieve latest data from local storage, then set items again
      //then overwrite users in local storage
      const newUser = { id: uuidv4(), role: "client", username: username, password: password, email: null, profile: null }

      const newUsers = [...currentUsers, newUser]
      localStorage.setItem('users', JSON.stringify(newUsers));


      alert("Successfully registered user");
      console.log("Successfully registered user");
      navigate("/");
    }
  };

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
  const handleLogin = async (username, password) => {
    // Simulate authentication by checking against dummy user data
    const user = currentUsers.find(
      (u) => u.username === username && u.password === password
    );
    try {
      //TODO update local storage / user profile with the response data
      const response = await axios.post('https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }



    if (user) {
      // If authentication succeeds, set the user as the current user
      setIsLoggedIn(true);
      setCurrentUser(user);

      // Save user data in localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      //console.log(localStorage.getItem('currentUser'))

      setProfileComplete(false);
      localStorage.setItem("profileCompleted", "false")

      if (!isProfileComplete) {
        navigate("/profile-completion");
      } else {
        // Redirect to the dashboard if the profile is complete
        navigate("/dashboard");
      }


    } else {
      // Handle login failure (e.g., show an error message)
      alert("Failed to login")
      console.log("Failed to login");
    }
  };

  // Logout handler (FIXME with real logic)
  const handleLogout = () => {
    // Clear the authentication token and set isLoggedIn to false.
    console.log("Logout clicked");
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.setItem("profileCompleted", "false")
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  // Profile click handler
  const handleProfileClick = () => {
    // Handle the Profile click event here
    // Navigate to the Profile page
    console.log("Profile clicked");
    navigate("/profile");
  };

  // Dashboard click handler
  const handleDashboardClick = () => {
    // Handle the Dashboard click event here
    // Navigate to the Dashboard page
    console.log("Dashboard clicked");
    navigate("/dashboard");
  };

  const handleProfileCompletion = (profileComplete) => {
    setProfileComplete(profileComplete);
    localStorage.setItem("profileCompleted", profileComplete ? "true" : "false");
  };

  return (
    // Body background color 
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
              <UserProfile user={currentUser} />
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
