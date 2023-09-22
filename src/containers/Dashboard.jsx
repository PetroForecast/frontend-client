import React from "react";
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Grid, Paper, Typography} from "@mui/material";
import { useState } from "react";

//quotes
const rows = [
  // data for table
  {
    id: 1,
    gallonsRequested: 2,
    deliveryAddress: "123 mcdonalds street",
    deliveryDate: "9-11-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 2,
    gallonsRequested: 4,
    deliveryAddress: "124 mcdonalds street",
    deliveryDate: "9-12-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 3,
    gallonsRequested: 6,
    deliveryAddress: "125 mcdonalds street",
    deliveryDate: "9-13-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 4,
    gallonsRequested: 8,
    deliveryAddress: "126 mcdonalds street",
    deliveryDate: "9-14-24",
    pricePerGallon: "2.56",
    amountDue: "327.12",
  },
  {
    id: 5,
    gallonsRequested: 10,
    deliveryAddress: "131 mcdonalds street",
    deliveryDate: "9-15-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 6,
    gallonsRequested: 12,
    deliveryAddress: "122 mcdonalds street",
    deliveryDate: "9-16-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 7,
    gallonsRequested: 24,
    deliveryAddress: "121 mcdonalds street",
    deliveryDate: "9-17-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
  {
    id: 8,
    gallonsRequested: 20,
    deliveryAddress: "120 mcdonalds street",
    deliveryDate: "9-18-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
  },
];

if(localStorage.getItem("quotes")){
  //do nothing
}
else{
  localStorage.setItem("quotes", JSON.stringify(rows))
}
//data initialized
function Dashboard({ user }) {

  //put into state
  const [latestQuotes, setLatestQuotes] = useState(function(){
    return JSON.parse(localStorage.getItem("quotes"))
  })

  return (
    <div>
      <Typography variant="h3">Welcome to the Dashboard</Typography>
      {user && (
        <>
          <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Typography gutterBottom variant="h4">User Information</Typography>
            <Typography variant="body1">Username: {user.username}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FuelQuoteForm onSubmitQuote = {setLatestQuotes} />
            </Grid>
            <Grid item xs={12} md={8}>
              <FuelQuoteHistoryTable latestQuotes = {latestQuotes}/>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* More Grid items can live here */}
            </Grid>
          </Grid>

        </>
      )}
    </div>
  );
}

export default Dashboard;
