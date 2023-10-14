import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const pages = ['Products', 'Pricing', 'Blog', 'Demo'];

export default function DefaultAppBar(props) {
  const [activeLink, setActiveLink] = React.useState(''); // State to track the active link


  const handleLinkClick = (page) => {
    console.log('Clicked:', page.toLowerCase());
    localStorage.setItem("currentPage", page.toLowerCase());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <OilBarrelIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={() => handleLinkClick("")}
          >
            PETROFORECAST
          </Typography>
          <OilBarrelIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PETROFORECAST
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': { backgroundColor: '#22c55e' },
                  backgroundColor: localStorage.getItem("currentPage") === page.toLowerCase() ? 'orange' : 'inherit', // Set the background color based on activeLink state
                }}
                onClick={() => handleLinkClick(page)}
              >
                <a href={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'white', }}>{page.toLowerCase()}</a>
                {/* {page} */}
              </Button>
            ))}
          </Box>
          {props.isLoggedInNull == true ? (
            <CircularProgress />
          ) : (
            <Box sx={{
              flexGrow: 0,
            }}>
              <Button
                variant="outlined"
                color="inherit"
                onClick={props.onLogin}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 191, 255, 0.3)',
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={props.onRegistration}
                sx={{
                  ml: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 191, 255, 0.3)',
                  },
                }}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
