import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button onClick={() => alert('You clicked me!')} variant="contained">CLICK ME</Button>
      <Button variant="outlined">HELLO WORLD</Button>

      <h2>Testing Testing</h2>
    </div>
  );
}

export default App;
