import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

// This function takes in props and updates them based on user input
const LoginModal = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Call the onLogin function with the entered username and password
    onLogin(username, password);
    onClose(); // Close the modal
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
