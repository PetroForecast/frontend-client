import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

// Gallons Requested, Delivery Address, Delivery Date, Suggested Price / gallon, Total Amount Due

const columns = [ //column definition for table
    {field: 'gallonsRequested', headerName: 'Gallons Requested', width: 200 },
    {field: 'deliveryAddress', headerName: 'Delivery Address', width: 200 },
    {field: 'deliveryDate', headerName: 'Delivery Date', width: 200 },
    {field: 'pricePerGallon', headerName: 'Suggested Price per Gallon', width: 200 },
    {field: 'amountDue', headerName: 'Total Amount Due', width: 200 },
];

const rows = [ // data for table
    { id: 1, gallonsRequested: '2', deliveryAddress: '123 mcdonalds street', deliveryDate: '9-11-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 2, gallonsRequested: '4', deliveryAddress: '124 mcdonalds street', deliveryDate: '9-12-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 3, gallonsRequested: '6', deliveryAddress: '125 mcdonalds street', deliveryDate: '9-13-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 4, gallonsRequested: '8', deliveryAddress: '126 mcdonalds street', deliveryDate: '9-14-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 5, gallonsRequested: '10', deliveryAddress: '131 mcdonalds street', deliveryDate: '9-15-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 6, gallonsRequested: '12', deliveryAddress: '122 mcdonalds street', deliveryDate: '9-16-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 7, gallonsRequested: '24', deliveryAddress: '121 mcdonalds street', deliveryDate: '9-17-24', pricePerGallon: '2.56', amountDue: '327.12' },
    { id: 8, gallonsRequested: '20', deliveryAddress: '120 mcdonalds street', deliveryDate: '9-18-24', pricePerGallon: '2.56', amountDue: '327.12' },
];

export default function FuelQuoteHistoryTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Fuel Quote History
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ //sets the defualt look of table
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection // adds checkboxes to table
      />
    </div>
  );
}