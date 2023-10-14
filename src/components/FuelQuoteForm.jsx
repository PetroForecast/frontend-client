import { TextField, Typography, Paper, Button } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import axios from "axios";

export default function FuelQuoteForm({ onSubmitQuote, user }) {
  const [formData, setFormData] = useState({
    id: "",
    gallonsRequested: "",
    deliveryAddress: "",
    deliveryDate: "",
    pricePerGallon: "",
    amountDue: "",
  });

  async function handleSubmit(e) {
    e.preventDefault()
    //add the form data to a new object
    if (formData.gallonsRequested === "" || formData.deliveryAddress === "" || formData.deliveryDate === "" || formData.pricePerGallon === "" || formData.amountDue === "") {
      alert("Error. Please fill all fields and try again.")
    }

    else {
      const username = user.username;
      const newQuote = {
        id: uuidv4(),
        gallonsRequested: formData.gallonsRequested,
        deliveryAddress: formData.deliveryAddress,
        deliveryDate: formData.deliveryDate,
        pricePerGallon: formData.pricePerGallon,
        amountDue: formData.amountDue,
        user: username,
      }

      try {
        const response = await axios.post(`https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/quote-history/add-quote`, newQuote);
        //console.log(response.data);
        //updating local storage
        localStorage.setItem("quotes", JSON.stringify([...JSON.parse(localStorage.getItem("quotes")), response.data]))
        //update state to reflect change in UI
        onSubmitQuote((quotes) => [...quotes, response.data])
      } catch (error) {
        console.error("Error submitting quote:", error);
        alert("Error submitting quote");
      }
      setFormData({
        id: "",
        gallonsRequested: "",
        deliveryAddress: "",
        deliveryDate: "",
        pricePerGallon: "",
        amountDue: "",
      })
      alert("Quote successfully submitted")
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Typography gutterBottom color="primary" variant="h4">Fuel Quote Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="gallonsRequested"
          value={formData.gallonsRequested}
          onChange={handleChange}
          label="Gallons Requested"
          type="number"
          required
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="deliveryAddress"
          label="Delivery Address"
          value={formData.deliveryAddress}
          onChange={handleChange}
          InputProps={{
            readOnly: false,
          }}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="deliveryDate"
          label="Delivery Date"
          value={formData.deliveryDate}
          onChange={handleChange}
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="pricePerGallon"
          label="Suggested Price / gallon"
          type="number"
          value={formData.pricePerGallon}
          onChange={handleChange}
          InputProps={{
            readOnly: false,
          }}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="amountDue"
          label="Total Amount Due"
          type="number"
          value={formData.amountDue}
          onChange={handleChange}
          InputProps={{
            readOnly: false,
          }}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">SUBMIT</Button>
      </form>
    </Paper>
  );
}


