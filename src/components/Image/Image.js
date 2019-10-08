import React from 'react';

import './Image.css';

const Image = ({ image }) => {
  console.log(image);
  return (
    <div className="image-container" style={{
        backgroundImage: `url(${image.urls.regular})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
    </div>
  );
}

export default Image;
