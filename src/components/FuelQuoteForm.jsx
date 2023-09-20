import { Grid, TextField, Typography, Paper, Button } from "@mui/material";

function FuelQuoteForm() {
  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography gutterBottom color="primary" variant="h4">Fuel Quote Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="gallonsRequested"
            label="Gallons Requested"
            type="number"
            required
            variant="outlined"
            sx={{ mb: 2 }} // Add margin-bottom for spacing
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="deliveryAddress"
            label="Delivery Address"
            InputProps={{
              readOnly: false,
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="deliveryDate"
            label="Delivery Date"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="suggestedPrice"
            label="Suggested Price / gallon"
            type="number"
            InputProps={{
              readOnly: false,
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="totalAmountDue"
            label="Total Amount Due"
            type="number"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">SUBMIT</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default FuelQuoteForm;
