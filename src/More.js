import React from 'react';

function More() {
  return (
    <div>
      <h2>More Videos</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID_HERE?rel=0" 
        title="Video 3" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      {/* Add more iframes for additional videos */}
    </div>
  );
}

export default More;
