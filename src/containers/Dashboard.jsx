import React from "react";
import FuelQuoteHistoryTable from "../components/FuelQuoteHistoryTable";
import FuelQuoteForm from "../components/FuelQuoteForm";
import { Grid, Paper, Container, Typography } from "@mui/material";
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
      <h1>Welcome to the Dashboard</h1>
      {user && (
        <>
          <div>
            <h2>User Information</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FuelQuoteForm />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper
                elevation="4"
                sx={{
                  p: 3.8,
                }}
              >
                <FuelQuoteHistoryTable />
              </Paper>
            </Grid>
            {/* Display other user-specific information as needed */}
          </Grid>
        </>
      )}
    </div>
  );
}

export default Dashboard;
