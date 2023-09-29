import React from 'react';

export default function HomePage() {
  const iframeStyle = { width: '60%', height: '250px', boxShadow: '10px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'beige' };
  const containerStyle = {
    textAlign: 'center', // Center text horizontally
    marginTop: '10px',
  };
  const textStyle = {
    marginTop: '10px',   // Add some spacing between iframe and text
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'space-between',}}>
        <div style={containerStyle}>
          <iframe
            title="Natural Gas prices"
            id="eia_widget1"
            style={iframeStyle}
            src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22PRS%22%5D,%22product%22:%5B%22EPG0%22%5D,%22series%22:%5B%22N3010TX3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/natural-gas/pri/sum/data/&title=duoarea:%20STX%20process:%20PRS%20product:%20EPG0%20series:%20N3010TX3%20"
          />
          <p style={textStyle}>Texas Price of Natural Gas Delivered to Residential Consumers (Dollars per Thousand Cubic Feet)</p>
        </div>
        <div style={containerStyle}>
          <iframe
            title="Texas Crude oil prices"
            id="eia_widget2"
            style={iframeStyle}
            src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22value%22%5D&facet_params=%7B%22duoarea%22:%5B%22STX%22%5D,%22process%22:%5B%22FWA%22%5D,%22product%22:%5B%22EPC0%22%5D,%22series%22:%5B%22F003048__3%22%5D%7D&freq=monthly&start=2000-01&end=2023-03&url=/v2/petroleum/pri/dfp1/data/&title=duoarea:%20STX%20process:%20FWA%20product:%20EPC0%20series:%20F003048__3%20"
          />
          <p style={textStyle}>Texas Crude Oil First Purchase Price (Dollars per Barrel)</p>
        </div>
      </div>
      <div style={{ margin: '0 auto', textAlign: 'center', }}>
        <div style={containerStyle}>
          <iframe
            title="Coal prices"
            id="eia_widget3"
            style={{ width: '60%', height: '250px', boxShadow: '10px 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'beige' }}
            src="//www.eia.gov/opendata/embed/iframev2.php?api_key=Fibxe1kfudQWZeKGHbcfP5UEOu8k9lgigIIOLpqC&api_version=v2&data=%5B%22price%22%5D&facet_params=%7B%22location%22:%5B%22TX%22%5D,%22sector%22:%5B10%5D%7D&freq=quarterly&start=2000-Q1&end=2022-Q1&url=/v2/coal/consumption-and-quality/data/&title=location:%20TX%20sector:%2010%20"
          />
          <p style={textStyle}>Texas Coal per short ton price</p>
        </div>
      </div>
    </div>
  );
}