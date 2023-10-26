import React, { useState } from 'react';

const BlogPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    padding: '10px',
    backgroundColor: isHovered ? 'blue' : 'transparent',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif', // Specify the desired font family
  };

  const headlinesStyle = {
    marginTop: '30%',
  };

  const subHeadingStyle = {
    fontSize: '20px',
    color: '#555',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  const articleStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // transition: 'background-color 0.2s', // Add a smooth background color transition
  };

  const videoStyle = {
    marginBottom: '8%', // Add margin to the video elements
  };

  const linkStyle = {
    color: 'lime', 
    textDecoration: 'none', // Remove the underline
    cursor: 'pointer', 
    transition: 'color 0.2s', 
  };

  const blackHoverStyle = {
    color: 'black', // Change the text color to black on hover
  };

  return (
    <div style={containerStyle}>
      <section style={headlinesStyle} className="newspapers">
        <div className="newspaper-article" style={{ ...articleStyle }}>
          <h3 style={subHeadingStyle}>Latest top news:</h3>
          <p style={paragraphStyle}>
            <a
              href="https://investingnews.com/top-natural-gas-producers/" 
              target="_blank" 
              rel="noopener noreferrer" // Security attributes for opening links in a new tab
              style={{ ...linkStyle, ...blackHoverStyle }} 
            >
              Top 10 Countries for Natural Gas Production (Updated 2023)
            </a>
          </p>
          <p style={paragraphStyle}>
            <a
              href="https://finance.yahoo.com/news/chevron-buy-hess-corp-53-090551430.html" 
              target="_blank" 
              rel="noopener noreferrer" // Security attributes for opening links in a new tab
              style={{ ...linkStyle, ...blackHoverStyle }} 
            >
              Chevron to buy Hess for $53 billion in latest oil mega-merger
            </a>
          </p>
          <p style={paragraphStyle}>
            <a
              href="https://www.iea.org/news/global-coal-demand-set-to-remain-at-record-levels-in-2023" 
              target="_blank" 
              rel="noopener noreferrer" // Security attributes for opening links in a new tab
              style={{ ...linkStyle, ...blackHoverStyle }} 
            >
              Global coal demand set to remain at record levels in 2023
            </a>
          </p>
          <p style={paragraphStyle}>
            <a
              href="https://www.reuters.com/business/energy/oil-prices-rebound-israel-hamas-war-uncertainty-2023-10-24/" 
              target="_blank" 
              rel="noopener noreferrer" // Security attributes for opening links in a new tab
              style={{ ...linkStyle, ...blackHoverStyle }} 
            >
              Oil drops for third straight session on weak European economic data
            </a>
          </p>
        </div>
      </section>

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