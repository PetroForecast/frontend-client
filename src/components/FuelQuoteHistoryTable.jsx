import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";


const columns = [
  //column definition for table
  { field: "gallonsRequested", headerName: "Gallons Requested", width: 200 },
  { field: "deliveryAddress", headerName: "Delivery Address", width: 200 },
  { field: "deliveryDate", headerName: "Delivery Date", width: 200 },
  {
    field: "pricePerGallon",
    headerName: "Suggested Price per Gallon",
    width: 200,
  },
  { field: "amountDue", headerName: "Total Amount Due", width: 200 },
];

export default function FuelQuoteHistoryTable({latestQuotes}) {

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Box style={{ height: "auto", overflow: "auto" }}>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Fuel Quote History
        </Typography>
        <DataGrid
          rows={latestQuotes}
          columns={columns}
          initialState={{
            //sets the defualt look of table
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection // adds checkboxes to table
        />
      </Box>
    </Paper>
  );
}
