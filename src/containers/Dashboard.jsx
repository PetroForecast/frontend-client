import React from "react";
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Grid, Paper, Container, Typography, Item } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
//Todo add components
//Todo prompt user to complete profile if not completed
//(After client registers they should login first to complete the profile)

function Dashboard({ user }) {
  return (
    <div>
      <Typography gutterBottom variant="h3">Welcome to the Dashboard</Typography>
      {user && (
        <>
          <Paper elevation={4} sx={{ p: 3.8, mb: 2 }}>
            <Typography gutterBottom variant="h4">User Information</Typography>
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
              {/* More Grid items can live here */}
            </Grid>
          </Grid>

        </>
      )}
    </div>
  );
}

export default Dashboard;
