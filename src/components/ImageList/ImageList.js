import React from 'react';
import './ImageList.css';

import Image from './Image';

const ImageList = ({ images }) => {

  const renderImages = () => {
    if (images.length > 0) {
      return images.map(image => {
        console.log(image);
        return <Image key={image.id} image={image} />
      })
    }
  }

  return (
    <main className="image-list">
      {renderImages()}
    </main>
  );
}

export default ImageList;
