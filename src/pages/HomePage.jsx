import React from 'react'
import backgroundImage from './images/PetroForecastHome.png'; // Import your background image

export default function HomePage() {

  const textStyles = {
    color: 'orange',
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the image URL
    width: "100%",
    height: "100vh"

  };
  return (
    <div style = {backgroundStyle}>
      <h1 style = {textStyles}>HomePage</h1>
    </div>
  )
}

