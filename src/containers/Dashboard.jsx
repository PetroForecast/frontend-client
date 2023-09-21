import React from "react";
import { useState } from 'react';
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Grid, Paper, Container, Typography, Item} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//Todo add components
//Todo prompt user to complete profile if not completed
//(After client registers they should login first to complete the profile)

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

  return (
    <div> <br/><br/>
      <Typography variant="h3" align="center" color="primary">Welcome to the Dashboard</Typography> <br/>
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
                <Typography variant="body1">Email: {user.email}</Typography>
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid item xs={12} md={4}>
                <FuelQuoteForm />
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid item xs={12} md={8}>
                <FuelQuoteHistoryTable />
              </Grid>
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