import { Grid, TextField, Typography, Paper, Button } from "@mui/material";

function FuelQuoteForm() {
  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography variant="h6">Fuel Quote Form</Typography>
      <TextField
        fullWidth
        name="gallonsRequested"
        label="Gallons Requested"
        type="number"
        required
        variant="outlined"
        sx={{ m: 1 }} // Add margin-bottom for spacing
      />
      <TextField
        fullWidth
        name="deliveryAddress"
        label="Delivery Address"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        sx={{ m: 1 }}
      />
      <TextField
        fullWidth
        name="deliveryDate"
        label="Delivery Date"
        type="date"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ m: 1 }}
      />
      <TextField
        fullWidth
        name="suggestedPrice"
        label="Suggested Price / gallon"
        type="number"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        sx={{ m: 1 }}
      />
      <TextField
        fullWidth
        name="totalAmountDue"
        label="Total Amount Due"
        type="number"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        sx={{ m: 1 }}
      />
      <Button variant="contained">SUBMIT</Button>
    </Paper>
  );
}

export default FuelQuoteForm;
