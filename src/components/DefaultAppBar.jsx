// 56 - 64 change the code to the products page 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const pages = ['Products', 'Pricing', 'Blog'];


export default function DefaultAppBar(props) {

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
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={`/${page}`} style={{textDecoration: 'none'}}>{page}</a>
              </Button>
            ))}
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}