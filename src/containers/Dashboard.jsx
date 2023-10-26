import React from "react";
import { useState, useEffect } from "react";
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";

//Change BG color
document.body.style.backgroundColor = "#D3D3D3";

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

function Dashboard({ user }) {
  const [value, setValue] = useState(0);
  const [latestQuotes, setLatestQuotes] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(
    function () {
      async function fetchFuelQuoteHistory() {
        try {
          const response = await axios.get(
            `https://api-petroforecast-ec6416a1a32f.herokuapp.com/users/quote-history/${user.userId}`
          );
          setLatestQuotes(response.data);
        } catch (error) {
          console.error("Error fetching fuel quote history:", error);
        }
      }
      fetchFuelQuoteHistory();
    },
    [user.userId]
  );

  return (
    <div>
      {" "}
      <br />
      <br />
      <Typography variant="h3" align="center" color="primary">
        Welcome to the Dashboard
      </Typography>{" "}
      <br />
      {user && (
        <>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
                textColor="primary"
              >
                <Tab label="User Info" />
                <Tab label="Fuel Form" />
                <Tab label="Fuel Quote History" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  color="primary"
                  gutterBottom
                >
                  User Information
                </Typography>
                <Typography variant="body1">Username: {user.userId}</Typography>
                <Typography variant="body1">
                  Full Name: {user.fullName}
                </Typography>
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FuelQuoteForm user={user} onSubmitQuote={setLatestQuotes} />
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
