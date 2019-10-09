import React from 'react';

import './Image.css';

const Image = ({ image, setActiveImage, arrayPosition }) => {
  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${image.urls.regular})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      onClick={(e) => setActiveImage(e, image)}
    >
    </div>
  );
}

export default Image;
