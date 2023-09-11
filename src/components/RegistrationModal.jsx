import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// This function takes in props and updates them based on user input
const RegistrationModal = ({ open, onClose, onRegistration }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleRegistration = () => {
        if (password === confirmPassword) {
            onRegistration(username, password);
            onClose();
        }
        else {
            setPasswordsMatch(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Register
                <IconButton
                    aria-label='close'
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
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
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    error={!passwordsMatch}
                    helperText={!passwordsMatch && "Passwords do not match"}
                />
                <Button variant="contained" color="primary" onClick={handleRegistration}>
                    Register
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default RegistrationModal;
