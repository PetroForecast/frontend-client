import React from "react";
import ceo from "./images/main_image_4353.webp";
import states from "./images/states.webp";
import data from "./images/data.webp";
import attempt from "./images/try.webp";
// import reactlogo from '../../public/logo192.png';

function ProductsPage() {
  const ceo_main = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
  };

  const ceo_image = {
    width: "60rem",
    height: "30rem",
  };

  const ceo_text = {
    fontSize: "larger",
    maxWidth: "550px",
    overflow: "hidden",
  };

  const ceo_h1 = {
    fontFamily: "Arial sans-serif",
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const boxes = {
    height: "100%",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const container = {
    width: "300px",
    height: "300px",
    position: "relative",
    margin: "0 20px" /* Add margin for spacing between elements */,
    overflow: "hidden", // Hide any content that overflows the container
    borderRadius: "20px", // Rounded corners
  };

  const imageWrapper = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const background_image = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Cover the container
    backgroundColor: "blue",
  };

  const text = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "white",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div>
      <div className="Main-image-text" style={ceo_main}>
        <img
          alt="This CEO and entrepreneur are working on their laptops"
          src="https://petroforecastimages.s3.amazonaws.com/images/main_image_4353.webp"
          style={ceo_image}
        />
        <div style={ceo_text}>
          <h1 style={ceo_h1}>Shaping the Future Together</h1>
          <p>
            The PetroForecast application is an innovation aimed at making fuel
            searching easier. Rapid changes in the global climate and high
            rising prices create worries in the US population. We are here to
            solve these problems by using a powerful search engine to retrieve
            the latest fuel prices from all the locations across the United
            States. Clients will be offered a wide range of prices, along with
            estimated shipping dates, and the ability to compare prices, all
            within a single application.
          </p>
        </div>
      </div>

      <div style={boxes}>
        <div style={{ ...container }}>
          <div style={imageWrapper}>
            <img
              src={states}
              alt="mage1"
              className="background-image"
              style={background_image}
            />
          </div>
          <div className="text" style={text}>
            <p>Prices for 49+ states</p>
          </div>
        </div>
        <div style={{ ...container }}>
          <div style={imageWrapper}>
            <img
              src={data}
              alt="mage2"
              className="background-image"
              style={background_image}
            />
          </div>
          <div className="text" style={text}>
            <p>Our data goes back to 1952</p>
          </div>
        </div>
        <div style={{ ...container }}>
          <div style={imageWrapper}>
            <img
              src={attempt}
              alt="mage3"
              className="background-image"
              style={background_image}
            />
          </div>
          <div className="text" style={text}>
            <p>Try it</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
