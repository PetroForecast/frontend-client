import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionAlerts from '../Alerts/alert';

// This function takes in props and updates them based on user input
const RegistrationModal = ({ open, onClose, onRegistration }) => {
    const [registrationAlert, setRegistrationAlert] = useState({
        open: false,
        severity: 'success', // Set the severity based on the message type
        message: '',
    });
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // Cleanup function to reset state
    const resetState = () => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setPasswordsMatch(true);
    };

    const handleClose = () => {
        // Call the cleanup function before closing the modal
        resetState();
        onClose();
    };
    

    const handleRegistration = () => {
        if(password && confirmPassword && username){
            if (password === confirmPassword) {
                onRegistration(username, password);
                handleClose();
            }
            else {
                setPasswordsMatch(false);
            }
        
        }
        else{
            setRegistrationAlert({
                open: true,
                severity: 'error',
                message: 'Please complete all the fields.',
            });
            // alert("Please complete all the fields.")
        }


    
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Register
                <IconButton
                    aria-label='close'
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            { // Alert UI 
            registrationAlert.open && (
                <DescriptionAlerts
                severity={registrationAlert.severity}
                message={registrationAlert.message}
                closeable={true}
                onClose={() => setRegistrationAlert({ ...registrationAlert, open: false })}
                />
            )}
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
