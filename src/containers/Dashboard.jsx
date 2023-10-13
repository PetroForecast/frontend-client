import React from "react";
import { useState } from 'react';
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Grid, Paper, Container, Typography, Item } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



//TODO: move this to backend and call backend to get it here based on who is logged in.
//dummy data for quote history table
const rows = [
  {
    id: 1,
    gallonsRequested: 2,
    deliveryAddress: "123 mcdonalds street",
    deliveryDate: "9-11-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 2,
    gallonsRequested: 4,
    deliveryAddress: "124 mcdonalds street",
    deliveryDate: "9-12-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 3,
    gallonsRequested: 6,
    deliveryAddress: "125 mcdonalds street",
    deliveryDate: "9-13-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 4,
    gallonsRequested: 8,
    deliveryAddress: "126 mcdonalds street",
    deliveryDate: "9-14-24",
    pricePerGallon: "2.56",
    amountDue: "327.12",
    user: 'user1',
  },
  {
    id: 5,
    gallonsRequested: 10,
    deliveryAddress: "131 mcdonalds street",
    deliveryDate: "9-15-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 6,
    gallonsRequested: 12,
    deliveryAddress: "122 mcdonalds street",
    deliveryDate: "9-16-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 7,
    gallonsRequested: 24,
    deliveryAddress: "121 mcdonalds street",
    deliveryDate: "9-17-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
  {
    id: 8,
    gallonsRequested: 20,
    deliveryAddress: "120 mcdonalds street",
    deliveryDate: "9-18-24",
    pricePerGallon: 2.56,
    amountDue: 327.12,
    user: 'user1',
  },
];

if (localStorage.getItem("quotes")) {
  //do nothing
}
else {
  localStorage.setItem("quotes", JSON.stringify(rows))
}

//Change BG color
document.body.style.backgroundColor = '#D3D3D3';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Dashboard({ user }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //put into state
  const [latestQuotes, setLatestQuotes] = useState(function () {
    return JSON.parse(localStorage.getItem("quotes"))
  })

  return (
    <div> <br /><br />
      <Typography variant="h3" align="center" color="primary">Welcome to the Dashboard</Typography> <br />
      {user && (
        <>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" textColor="primary">
                <Tab label="User Info" />
                <Tab label="Fuel Form" />
                <Tab label="Fuel Quote History" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Typography component="h2" variant="h4" color="primary" gutterBottom>User Information</Typography>
                <Typography variant="body1">Username: {user.username}</Typography>
                <Typography variant="body1">Full Name: {user.fullName}</Typography>
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FuelQuoteForm onSubmitQuote={setLatestQuotes} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <FuelQuoteHistoryTable latestQuotes={latestQuotes} />
            </CustomTabPanel>
          </Box>

        </>
      )}
    </div>
  );
}

export default Dashboard;

/*<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Typography component="h2" variant="h4" color="primary" gutterBottom>User Information</Typography>
            <Typography variant="body1">Username: {user.username}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FuelQuoteForm />
            </Grid>
            <Grid item xs={12} md={8}>
              <FuelQuoteHistoryTable />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* More Grid items can live here */ /*}
</Grid>
</Grid>
*/