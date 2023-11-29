import React from 'react';

export default function DemoPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)' }}>
        <div>
          <div style={{textAlign: 'center'}} className="video-container">
            <div style={{fontSize: '24px', fontWeight: '500', marginBottom: '20px'}} className="video-title">Demo Video</div>
            <iframe 
              style={{width: '45rem', height: '25rem', border: 'none'}} 
              width="949"
              height="534"
              src="https://www.youtube.com/embed/aJGmaCtEupg"
              title="NF - The Search"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
