import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Button onClick={() => alert('You clicked me!')} variant="contained">CLICK ME</Button>
    </>
  );
}

export default App;
