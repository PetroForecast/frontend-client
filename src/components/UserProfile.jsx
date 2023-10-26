import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Button, TextField } from '@mui/material';

function UserProfile({ user, onUpdateProfile }) {
  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const toggleEdit = () => {
    setEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Call the onUpdateProfile function to handle the update
    onUpdateProfile(editedUser);
    setEditing(false);
  };

  const borderStyle = {
    border: '1px solid',
    padding: '10px',
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          User Profile
          <Button
            onClick={toggleEdit}
            variant="contained"
            color="primary"
            style={{ marginLeft: '10px', marginBottom: '5px' }}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
          {isEditing && (
            <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginLeft: '10px', marginBottom: '5px' }}>
              Save Changes
            </Button>
          )}
        </Typography>
        {isEditing ? (
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  value={editedUser.fullName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="addressOne"
                  label="Address One"
                  value={editedUser.addressOne}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="addressTwo"
                  label="Address two"
                  value={editedUser.addressTwo}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="city"
                  label="City"
                  value={editedUser.city}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="state"
                  label="State"
                  value={editedUser.state}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="zipcode"
                  label="Zipcode"
                  value={editedUser.zipcode}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        ) : (
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
                  <Typography variant="body1">{user.addressOne}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} style={borderStyle}>
                  <Typography variant="h6">Address 2:</Typography>
                  <Typography variant="body1">
                    {user.addressTwo ? user.addressTwo : 'N/A'}
                  </Typography>
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
        )}
      </Paper>
    </Container>
  );
}

export default UserProfile;
