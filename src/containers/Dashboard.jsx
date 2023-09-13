import React from 'react';
import FuelQuoteHistoryTable from '../components/FuelQuoteHistoryTable';
import { Grid, Paper, Container } from '@mui/material';

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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12}>
              <Paper elevation="4" sx={{ pt: 5, pb: 10, px: 5,  display: 'flex', flexDirection: 'column' }}>
                {<FuelQuoteHistoryTable />}
              </Paper>
            </Grid>
          </Container>
          {/* Display other user-specific information as needed */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;