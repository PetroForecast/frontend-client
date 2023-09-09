import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <div>
          <h2>User Information</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user-specific information as needed */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;