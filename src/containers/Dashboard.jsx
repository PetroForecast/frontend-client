import React from 'react';
import FuelQuoteHistoryTable from '../components/FuelQuoteHistoryTable';

//Todo add components
//Todo prompt user to complete profile if not completed 
//(After client registers they should login first to complete the profile)
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
          { <FuelQuoteHistoryTable /> }
        </div>
      )}
    </div>
  );
}

export default Dashboard;