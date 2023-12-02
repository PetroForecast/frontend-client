import { TextField, Typography, Paper, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import DescriptionAlerts from "../Alerts/alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FuelQuoteForm({ onSubmitQuote, user }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      id: "",
      gallonsRequested: "",
      deliveryAddress: formData.deliveryAddress,
      deliveryDate: formData.deliveryDate,
      pricePerGallon: "",
      amountDue: "",
    });
  };

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
          pricePerGallon: parseFloat(suggestedPricePerGallon).toFixed(2),
          amountDue: parseFloat(suggestedTotalPrice).toFixed(2),
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
        option: choice,
      };

      try {
        const response = await axios.post(
          `https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/quote-history/check-quote`,
          newQuote
        );

        const { suggestedPricePerGallon, suggestedTotalPrice } = response.data;

        setFormData({
          id: "",
          gallonsRequested: formData.gallonsRequested,
          deliveryAddress: formData.deliveryAddress,
          deliveryDate: formData.deliveryDate,
          pricePerGallon: parseFloat(suggestedPricePerGallon).toFixed(2),
          amountDue: parseFloat(suggestedTotalPrice).toFixed(2),
        });
        //Retrieve and parse the existing quotes from localStorage
        const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
        // Update the "quotes" item in localStorage
        localStorage.setItem(
          "quotes",
          JSON.stringify([...existingQuotes, response.data])
        );
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

      setRegistrationAlert({
        open: true,
        severity: "success",
        message: "Quote successfully submitted",
      });
      handleOpen();
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
        <Button
          type="submit"
          variant="outlined"
          onClick={handleGetQuote}
          sx={{
            marginLeft: "10px",
          }}
        >
          Get Quote
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Quote successfully submitted✅
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Suggested Price/Gallon: ${formData.pricePerGallon}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Total Amount Due: ${formData.amountDue}
            </Typography>
          </Box>
        </Modal>
      </form>
    </Paper>
  );
}
