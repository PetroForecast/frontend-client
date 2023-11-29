
import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
//import { getNews } from '../data/News.api';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

//Here we get news
// var data = [];
// try {
//   data = await getNews();
// } catch (error) {
//   data = [];
//   console.error('Error fetching news:', error);
// }
// // console.log(data);
// var increment = 1; 
// var cardContent = {} // "author", "description", "title", "url", "urlToImage"
// for(let d of data){
//   cardContent[increment] = d;
//   increment+=1;
// }
// const cards = Array(data.length).fill(1).map((n, i) => n + i);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const subHeadingStyle = {
  fontSize: '20px',
  color: '#555',
};

const articleStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const videoStyle = {
  marginBottom: '8%',
};

const BlogPage = () => {

  return (
    <div style={containerStyle}>
      <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: 'monospace',
              pt: '42px',
            }}
            gutterBottom
          >
            Latest Stories
          </Typography>
          <br/>
          {/* <Grid container spacing={4} justifyContent="center" sx={{ pb: '22pt' }}>
            {data.length === 0 ? 
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nothing to see
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            :
            cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={cardContent[card]["urlToImage"]} 
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardContent[card]["title"]}
                    </Typography>
                    <Typography>
                      {cardContent[card]["description"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={cardContent[card]["url"]}>Go to article</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
            }
          </Grid> */}
        </Container>

      <section className="videos">
        <div className="video" style={{ ...articleStyle }}>
          <h3 style={subHeadingStyle}>How does Natural Gas have an impact during hot summer temperatures</h3>
          <iframe
            width="700"
            height="355"
            src="https://www.youtube.com/embed/fFXcBIFoxdE"
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video" style={{ ...articleStyle, ...videoStyle }}>
          <h3 style={subHeadingStyle}>Crude oil production</h3>
          <iframe
            width="700"
            height="355"
            src="https://www.youtube.com/embed/bHPJxHKVkSM"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

