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
import { dummyUsers } from './data/users';
import ProfileCompletionForm from "./components/ProfileCompletionForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Add profile completion state (FIXME: backend implementation)
  const [isProfileComplete, setProfileComplete] = useState(null);
  const navigate = useNavigate();

  //TESTING
  // Load user data from localStorage on initial load
  useEffect(() => {

    //FIXME: add real logic to check database if the profile was complete here

    const storedUser = localStorage.getItem("currentUser");
    const storedProfileCompleted = localStorage.getItem("profileCompleted");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
      setProfileComplete(storedProfileCompleted === "true");
      // setProfileComplete(userHasCompletedProfile);
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
    const userExists = dummyUsers.find((u) => u.username === username);

    if (userExists) {
      // FIXME
      // Handle registration failure
      alert("Failed to register");
      console.log("Failed to register");
    } else {
      // FIXME
      // Insert data into database
      // After client registers they should login first to complete the profile
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
      localStorage.setItem("currentUser", JSON.stringify(user));
      //console.log(localStorage.getItem('currentUser'))

      setProfileComplete(false);

      if (!isProfileComplete) {
        navigate("/profile-completion");
      } else {
        // Redirect to the dashboard if the profile is complete
        navigate("/dashboard");
      }


    } else {
      // Handle login failure (e.g., show an error message)
      console.log("Failed to login");
    }
  };

  // Logout handler (FIXME with real logic)
  const handleLogout = () => {
    // Clear the authentication token and set isLoggedIn to false.
    console.log("Logout clicked");
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");
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
    <div>

      {isLoggedIn ? (
        <UserAppBar
          onProfileClick={handleProfileClick}
          onDashboardClick={handleDashboardClick}
          onLogout={handleLogout}
        />
      ) : (
        <DefaultAppBar
          onLogin={openLoginModal}
          onRegistration={openRegistrationModal}
        />
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
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/profile-completion" /> // Nav to completion form
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
