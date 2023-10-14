import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts({ severity, message, closeable, onClose }) {
  const [open, setOpen] = React.useState(true);

  // Function to close the alert
  const handleClose = () => {
    setOpen(false);
    onClose(); // Notify the parent component if needed
  };

  if (!open) {
    return null; // Don't render the alert if it's closed
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{severity.charAt(0).toUpperCase() + severity.slice(1)}</AlertTitle>
        {message}
        {closeable && (
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              right: '20px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        )}
      </Alert>
    </Stack>
  );
}
