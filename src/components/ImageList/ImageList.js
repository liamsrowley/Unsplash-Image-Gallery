import React, { useState, useEffect } from 'react';

import Image from '../Image/Image';
import ImageDetail from '../ImageDetail/ImageDetail';
import './ImageList.css';

const ImageList = ({ images, loadMoreImages }) => {

  const [activeImage, setActiveImage] = useState(null);

  // Display detailed image when an item in the list is clicked
  const handleClick = (e, image) => {
    if (e.target === e.currentTarget) {
      setActiveImage(image);
    }
  }

  // Find the next image in the images array and render it
  const renderNextImage = async () => {
    if (images[activeImage.arrayPosition+1]) {
      const nextImage = images[activeImage.arrayPosition+1];
      setActiveImage({
        ...nextImage,
        arrayPosition: activeImage.arrayPosition + 1
      });
    } else {
      await loadMoreImages();
    }
  }

  // Find the previous image in the images array and render it
  const renderPrevImage = () => {
    if (images[activeImage.arrayPosition-1]) {
      const prevImage = images[activeImage.arrayPosition-1];
      setActiveImage({
        ...prevImage,
        arrayPosition: activeImage.arrayPosition - 1
      });
    }
  }

  const closeActiveImage = () => {
    setActiveImage(null);
  }

  // Map through the images array and render them all in a list
  const renderImages = () => {
    if (images.length > 0) {
      return images.map((image, i) => {
        const imageWithArrPos = { ...image, arrayPosition: i }
        return <Image key={image.id} image={imageWithArrPos} setActiveImage={handleClick} setNextImage={renderNextImage} />
      })
    }
  }

  // Render image details if an image is active
  const renderActiveImage = () => {
    if (activeImage) {
      return <ImageDetail image={activeImage} renderNextImage={renderNextImage} renderPrevImage={renderPrevImage} closeActiveImage={closeActiveImage} />;
    }
  }

  return (
    <main className="image-list">
      {renderImages()}
      {renderActiveImage()}
    </main>
  );
}

export default ImageList;
