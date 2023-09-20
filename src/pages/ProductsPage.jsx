import React from 'react';
import fuel from './images/fuel-tank.svg';

function ProductPage() {
  const product_styling = {
    color: 'black',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '100vw',
  };

  const about = {
    maxWidth: '700px',
    wordWrap: 'break-word',
    margin: '2rem 0 5rem 1rem',
    lineHeight: '1.6',
    fontFamily: 'Roboto Open Sans Times New Roman',
    fontSize: 'large',
  };

  const circleStyle = {
    width: '10vw',
    height: '10vw',
    borderRadius: '50%',
    backgroundColor: 'white', 
    margin: '0 8rem', // Adjust the margin as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const textInsideCircle = {
    lineHeight: '1.6',
    fontFamily: 'Roboto Open Sans Times New Roman',
    fontSize: 'large',
    wordWrap: 'break-word',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black', // Change the text color as needed
  };

  // Apply background color to the body element
  document.body.style.backgroundColor = '#fde68a';

  return (
    <div>
      <div style={product_styling}>
        <div style={about}>
          <h1>Product overview</h1>
          <p>
            The PetroForecast application is an innovation aimed at making fuel searching easier.
            Rapid changes in the global climate and high rising prices create worries in the US population.
            We are here to solve these problems by using a powerful search engine to retrieve the latest fuel prices
            from all the locations across the United States. Clients will be offered a wide range of prices,
            along with estimated shipping dates, and the ability to compare prices, all within a single application.
          </p>
        </div>
        <img src={fuel} alt="logo" style={{ maxWidth: '350px', maxHeight: '350px', margin: '2rem 10rem 5rem 0' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={circleStyle}><h2 style={textInsideCircle}>Prices for 49+ states</h2></div>
        <div style={circleStyle}><h2 style={textInsideCircle}>Our data goes back to 1952</h2></div>
        <div style={circleStyle}><h2 style={textInsideCircle}>Try it</h2></div>
      </div>
    </div>
  );
}

export default ProductPage;
