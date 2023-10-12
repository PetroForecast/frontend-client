import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

function UserProfile() {
  const storedUser = localStorage.getItem('currentUser');
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log(user);

  const borderStyle = {
    border: '1px solid',
    padding: '10px',
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          User Profile
          <Button variant="contained" color="primary" style={{ marginLeft: '10px', marginBottom: '5px' }}>
            Update Profile
          </Button>
        </Typography>
        {user ? (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Full Name:</Typography>
                  <Typography variant="body1">{user.fullName}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Address 1:</Typography>
                  <Typography variant="body1">{user.address1}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Address 2:</Typography>
                  <Typography variant="body1">{user.address2 = user.address2 ? user.address2 : 'N/A'}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">City:</Typography>
                  <Typography variant="body1">{user.city}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">State:</Typography>
                  <Typography variant="body1">{user.state}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Zipcode:</Typography>
                  <Typography variant="body1">{user.zipcode}</Typography>
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
