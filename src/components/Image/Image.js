import React, { useState } from 'react';

import ImageDetail from '../ImageDetail/ImageDetail';

import './Image.css';

const Image = ({ image }) => {

  const [showImageDetail, setShowImageDetail] = useState(false);

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowImageDetail(!showImageDetail);
    }
  }

  const renderImageDetail = () => {
    if (showImageDetail) {
      return <ImageDetail image={image} />;
    }
  }

  return (
    <div
      className="image-container"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${image.urls.regular})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
    { renderImageDetail() }
    </div>
  );
}

export default Image;
