import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

function UserProfile() {
  //FIXME real logic
  // Retrieve user data from local storage
  const storedUser = localStorage.getItem('currentUser');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const borderStyle = {
    border: '1px solid',
    padding: '10px',
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        {user ? (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Full Name:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.name : ''}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Address 1:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.address1 : ''}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Address 2:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.address2 : ''}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">City:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.city : ''}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">State:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.state : ''}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Zipcode:</Typography>
                  <Typography variant="body1">{user.profile ? user.profile.zipcode : ''}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        ) : (
          <Typography variant="body1">
            No user data available.
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default UserProfile;
