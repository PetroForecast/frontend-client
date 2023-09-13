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


/*import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

// Gallons Requested, Delivery Address, Delivery Date, Suggested Price / gallon, Total Amount Due
// switch to ^ data, move create data to new file(?) 

// getting data in here, its here, less running back and forth 
// cons getting data here, maybe more exposed, idk

// First set up table, pagenations, sorting functions 
// Next, add data to chart
// Next, see how we can change the formatting
// All this before wednesday

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function FuelQuoteHistoryTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Fuel Quote History
      </Typography>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}*/

/*import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Paper, Grid } from '@mui/material';

// Generate Order Data
// Gallons Requested, Delivery Address, Delivery Date, Suggested Price / gallon, Total Amount Due

// switch to ^ data, move create data to new file(?) 
// getting data in here, its here, less running back and forth 
// cons getting data here, maybe more exposed, idk

// First set up table, pagenations, sorting functions 
// Next, add data to chart
// Next, see how we can change the formatting
// All this before wednesday

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function FuelQuoteHistoryTable() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Fuel Quote History
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
} */