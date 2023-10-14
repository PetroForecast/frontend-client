import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts({ severity, message, closeable, onClose }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity} onClose={closeable ? onClose : null}>
        <AlertTitle>{severity.charAt(0).toUpperCase() + severity.slice(1)}</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}
