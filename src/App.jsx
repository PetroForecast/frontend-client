/*TODO: 
- Homepage change to a traditional format "Welcome to our website..." (Not required but lets try to do this) (Yuto & Jessica)
- Modify Fuel quote forms 'suggested price' and 'total amount due' modify form layout (Jaz)
- Get quote button (fuel quote form) (Jaz)
- Partial form submission (fuel quote form) (Max & Jaz)
- Submit quote saves the quote to database (fuel quote form) (Max & Jaz)
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
import axios from 'axios';
import './scrollbar/custom-scrollbar-ui.css';
import Footer from './components/Footer';

// Import the DescriptionAlerts component from Alert.jsx
import DescriptionAlerts from './Alerts/alert';



//add dummy users to local storage-->
// if (localStorage.getItem("users")) {//do nothing
// }
// else {
//   localStorage.setItem('users', JSON.stringify(dummyUsers));
// }

export default function App() {
  const [registrationAlert, setRegistrationAlert] = useState({
    open: false,
    severity: 'success', // Set the severity based on the message type
    message: '',
  });


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
        setRegistrationAlert({
          open: true,
          severity: 'success',
          message: 'Successfully registered user, Please login to continue',
        });
        // alert("Successfully registered user, Please login to continue");
        // console.log("Successfully registered user");
        const registrationResponse = await axios.post('https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/register', {
          username: username,
          password: password,
        });
        console.log('User registered:', registrationResponse);

        navigate("/");
      }

    } catch (error) {

      setRegistrationAlert({
        open: true,
        severity: 'error',
        message: 'Failed to register, username is already taken.',
      });

      console.error('Registration failed:', error);
      // alert("Failed to register, username is already taken.")
      // console.error('Registration failed:', error);
    }
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/login',
        { username, password });
      console.log(response.data);
      if (response.data) {
        setIsLoggedIn(true);
        setRegistrationAlert({
          open: true,
          severity: 'success',
          message: 'Successfully logged in, welcome!',
        });
        setCurrentUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        //console.log((JSON.parse((localStorage.getItem("currentUser"))).isComplete));
        let profileComplete = JSON.parse((localStorage.getItem("currentUser"))).isComplete;
        if (profileComplete === 0) {
          setProfileComplete(false);
        } else {
          setProfileComplete(true);
        }
        localStorage.setItem("currentPage", "");
        if (!isProfileComplete) {
          navigate("/profile-completion");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      setRegistrationAlert({
        open: true,
        severity: 'error',
        message: 'Failed to login. Username or password incorrect!',
      });
      console.error('Login failed:', error);

      // alert("Failed to login")
      // console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setRegistrationAlert({ open: false })
    localStorage.setItem("currentPage", "");
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

  const handleProfileCompletion = (updatedUser, profileComplete) => {
    setProfileComplete(profileComplete);
    localStorage.setItem("profileCompleted", profileComplete ? "true" : "false");
    setCurrentUser(updatedUser);
  };

  const handleUpdateProfile = async (updatedUser) => {
    try {
      const response = await axios.put(`https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/update/${updatedUser.userId}`, updatedUser)
      console.log("Profile update action on:", response.data);
      setCurrentUser(response.data);
      localStorage.setItem("currentUser", JSON.stringify(response.data));
    } catch (error) {
      alert("Failed to Update User")
      console.error('Update User Failed:', error);
    }
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

      { // Alert UI 
        registrationAlert.open && (
          <DescriptionAlerts
            severity={registrationAlert.severity}
            message={registrationAlert.message}
            closeable={true}
            onClose={() => setRegistrationAlert({ ...registrationAlert, open: false })}
          />
        )}

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
                <ProfileCompletionForm user={currentUser} onComplete={handleProfileCompletion} /> // Show profile completion form
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
      {/* <Footer/> */}
    </div>
  );
}


