import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const iframeStyle = { width: '60%', height: '250px', boxShadow: '10px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'beige' };
  const containerStyle = {
    textAlign: 'center', // Center text horizontally
    marginTop: '10px',
  };
  const textStyle = {
    marginTop: '10px',   // Add some spacing between iframe and text
  };

  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return "https://interfuels.co.uk/media/xi5jajfn/website-images-2-min.png";
      case 2:
        return "https://cleanmanagement.com/wp-content/uploads/2019/09/Tankers.jpg";
      case 3:
        return "https://www.saferack.com/wp-content/uploads/2016/12/AdobeStock_115296235.jpeg";
      case 4:
        return "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg";
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/5/51/Anacortes_Refinery_31911.JPG";
    }
  };

  return (
    <main>
      <Box
       sx={{
        backgroundImage: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        pt: 12,
        pb: 60,
      }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            font-weight="bold"
            gutterBottom
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PETROFORECAST
          </Typography>
          <Typography variant="h5" align="center" color="white" paragraph>
            We get you the best quotes, the best oil, delivered to you, fast.
          </Typography>
        </Container>
      </Box>
      <br/><br/>
      <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              pt: 1,
              pb: 1,
            }}> One</Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: "white",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              pt: 1,
              pb: 1,
            }}>Two</Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: "white",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              pt: 1,
              pb: 1,
            }}>Three</Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "white",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              pt: 1,
              pb: 1,
            }}>Four</Box>
        </Grid>
      </Grid>
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          font-weight="bold"
          gutterBottom
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.05rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Some stuff about our company/ news
        </Typography>
        <Typography variant="h5" align="center" color="white" paragraph>
          Our company is great
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="inherit" paragraph>
          Recent trends
        </Typography>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <div style={containerStyle}>
                <iframe
                  title="Natural Gas prices"
                  id="eia_widget1"
                  style={iframeStyle}
                  src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22PRS%22%5D,%22product%22:%5B%22EPG0%22%5D,%22series%22:%5B%22N3010TX3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/natural-gas/pri/sum/data/&title=duoarea:%20STX%20process:%20PRS%20product:%20EPG0%20series:%20N3010TX3%20"
                />
                <p style={textStyle}>Texas Price of Natural Gas Delivered to Residential Consumers (Dollars per Thousand Cubic Feet)</p>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div style={containerStyle}>
                <iframe
                  title="Texas Crude oil prices"
                  id="eia_widget2"
                  style={iframeStyle}
                  src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22FWA%22%5D,%22product%22:%5B%22EPC0%22%5D,%22series%22:%5B%22F003048__3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/petroleum/pri/dfp1/data/&title=duoarea:%20STX%20process:%20FWA%20product:%20EPC0%20series:%20F003048__3%20"
                />
                <p style={textStyle}>Texas Crude Oil First Purchase Price (Dollars per Barrel)</p>
              </div>
            </Grid>
          </Grid>
          <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <Grid item xs={6}>
              <div style={containerStyle}>
                <iframe
                  title="Coal prices"
                  id="eia_widget3"
                  style={{ width: '60%', height: '250px', boxShadow: '10px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'beige' }}
                  src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22price%22%5D&facet_params=%7B%22location%22:%5B%22TX%22%5D,%22sector%22:%5B10%5D%7D&freq=quarterly&start=2000-Q1&end=2022-Q1&url=/v2/coal/consumption-and-quality/data/&title=location:%20TX%20sector:%2010%20"
                />
                <p style={textStyle}>Texas Coal per short ton price</p>
              </div>
            </Grid>
          </div>
        </div>
      </Container>

    </main>
    
    // <div>
    //   <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-between',}}>
    //     <div style={containerStyle}>
    //       <iframe
    //         title="Natural Gas prices"
    //         id="eia_widget1"
    //         style={iframeStyle}
    //         src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22PRS%22%5D,%22product%22:%5B%22EPG0%22%5D,%22series%22:%5B%22N3010TX3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/natural-gas/pri/sum/data/&title=duoarea:%20STX%20process:%20PRS%20product:%20EPG0%20series:%20N3010TX3%20"
    //       />
    //       <p style={textStyle}>Texas Price of Natural Gas Delivered to Residential Consumers (Dollars per Thousand Cubic Feet)</p>
    //     </div>
    //     <div style={containerStyle}>
    //       <iframe
    //         title="Texas Crude oil prices"
    //         id="eia_widget2"
    //         style={iframeStyle}
    //         src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22FWA%22%5D,%22product%22:%5B%22EPC0%22%5D,%22series%22:%5B%22F003048__3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/petroleum/pri/dfp1/data/&title=duoarea:%20STX%20process:%20FWA%20product:%20EPC0%20series:%20F003048__3%20"
    //       />
    //       <p style={textStyle}>Texas Crude Oil First Purchase Price (Dollars per Barrel)</p>
    //     </div>
    //   </div>
    //   <div style={{ margin: '0 auto', textAlign: 'center', }}>
    //     <div style={containerStyle}>
    //       <iframe
    //         title="Coal prices"
    //         id="eia_widget3"
    //         style={{ width: '60%', height: '250px', boxShadow: '10px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'beige' }}
    //         src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22price%22%5D&facet_params=%7B%22location%22:%5B%22TX%22%5D,%22sector%22:%5B10%5D%7D&freq=quarterly&start=2000-Q1&end=2022-Q1&url=/v2/coal/consumption-and-quality/data/&title=location:%20TX%20sector:%2010%20"
    //       />
    //       <p style={textStyle}>Texas Coal per short ton price</p>
    //     </div>
    //   </div>
    // </div>
  );
}