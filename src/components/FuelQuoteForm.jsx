import { TextField, Typography, Paper, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";


import DescriptionAlerts from "../Alerts/alert";


export default function FuelQuoteForm({ onSubmitQuote, user }) {
  const [registrationAlert, setRegistrationAlert] = useState({
    open: false,
    severity: "success", // Set the severity based on the message type
    message: "",
  });


  const [formData, setFormData] = useState({
    id: "",
    gallonsRequested: "",
    deliveryAddress: user.addressOne,
    deliveryDate: "",
    pricePerGallon: "1.5",
    amountDue: "",
  });

  async function handleGetQuote(e) {
    e.preventDefault();
    //add the form data to a new object

    const choice = "preview";
    if (
      formData.gallonsRequested === "" ||
      formData.deliveryAddress === "" ||
      formData.deliveryDate === ""
    ) {
      setRegistrationAlert({
        open: true,
        severity: "error",
        message: "Please fill all fields and try again.",
      });
      // alert("Error. Please fill all fields and try again.")
    } else {

      const newQuote = {
        id: uuidv4(),
        gallonsRequested: formData.gallonsRequested,
        deliveryAddress: formData.deliveryAddress,
        deliveryDate: formData.deliveryDate,
        user: user.userId,
        option: choice,
      };
      //console.log(newQuote);
      //API call here
      try {
        const response = await axios.post(
          `https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/quote-history/check-quote`,
          newQuote
        );

        //console.log(response.data);
        const { suggestedPricePerGallon, suggestedTotalPrice } = response.data;
        //console.log(suggestedPricePerGallon);
        setFormData({
          id: "",
          gallonsRequested: formData.gallonsRequested,
          deliveryAddress: formData.deliveryAddress,
          deliveryDate: formData.deliveryDate,
          pricePerGallon: suggestedPricePerGallon,
          amountDue: suggestedTotalPrice,
        });
        setRegistrationAlert({
          open: true,
          severity: "success",
          message: "Quote successfully created",
        });

      } catch (error) {
        setRegistrationAlert({
          open: true,
          severity: "error",
          message: "Error getting quote:",
        });
        console.error("Error getting quote:", error);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //add the form data to a new object
    const choice = "add"; //"preview" for getting quote
    if (
      formData.gallonsRequested === "" ||
      formData.deliveryAddress === "" ||
      formData.deliveryDate === ""
    ) {
      setRegistrationAlert({
        open: true,
        severity: "error",
        message: "Please fill all fields and try again.",
      });
      // alert("Error. Please fill all fields and try again.")
    } else {
      const newQuote = {
        id: uuidv4(),
        gallonsRequested: formData.gallonsRequested,
        deliveryAddress: formData.deliveryAddress,
        deliveryDate: formData.deliveryDate,
        user: user.userId,
        option: choice
      };
      console.log(newQuote);
      try {
        const response = await axios.post(
          `https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/quote-history/check-quote`,
          newQuote
        );
        //Retrieve and parse the existing quotes from localStorage
        const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        // Update the "quotes" item in localStorage
        localStorage.setItem("quotes", JSON.stringify([...existingQuotes, response.data]));
        //update state to reflect change in UI
        onSubmitQuote();
      } catch (error) {

        setRegistrationAlert({
          open: true,
          severity: "error",
          message: "Error submitting quote:",
        });

        console.error("Error submitting quote:", error);
        alert("Error submitting quote");
      }
      //11/28/2023 (FIXME: Keep data populated and 
      // put the returned calculations in pricePerGallon and amountDue fields)
      setFormData({
        id: "",
        gallonsRequested: "",
        deliveryAddress: formData.deliveryAddress,
        deliveryDate: formData.deliveryDate,
        pricePerGallon: "",
        amountDue: "",

      });
      setRegistrationAlert({
        open: true,
        severity: "success",
        message: "Quote successfully submitted",
      });
      // alert("Quote successfully submitted")

    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    if (name === "gallonsRequested") {
      value = value.replace(/\D/g, "");
    }
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Paper elevation={4} sx={{ p: 2 }}>

      {
        // Alert UI
        registrationAlert.open && (
          <DescriptionAlerts
            severity={registrationAlert.severity}
            message={registrationAlert.message}
            closeable={true}
            onClose={() =>
              setRegistrationAlert({ ...registrationAlert, open: false })
            }
          />
        )
      }
      <Typography gutterBottom color="primary" variant="h4">
        Fuel Quote Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="gallonsRequested"
          value={formData.gallonsRequested}
          onChange={handleChange}
          label="Gallons Requested"
          type="text"
          required
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="deliveryAddress"
          label="Delivery Address"
          value={formData.deliveryAddress}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
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
          disabled
          name="pricePerGallon"
          label="Suggested Price / gallon ($)"
          type="number"
          value={formData.pricePerGallon}
          variant="outlined"
          sx={{
            mb: 2,
          }}
        />
        <TextField
          fullWidth
          disabled
          name="amountDue"
          label="Total Amount Due ($)"
          type="number"
          value={formData.amountDue}
          variant="outlined"
          sx={{
            mb: 2,
          }}
        />

        <Button type="submit" variant="contained">
          SUBMIT
        </Button>
        <Button type="submit" variant="outlined" onClick={handleGetQuote} sx={{
          marginLeft: "10px",
        }}>
          Get Quote
        </Button>
      </form>
    </Paper>
  );
}
