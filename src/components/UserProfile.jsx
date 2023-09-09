import React from 'react';

function UserProfile() {
  // Retrieve user data from local storage
  const storedUser = localStorage.getItem('currentUser');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {user.profile && (
            <div>
              <p>Name: {user.profile.name}</p>
              <p>Bio: {user.profile.bio}</p>
            </div>
          )}
          {/* Add more user data fields here */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserProfile;