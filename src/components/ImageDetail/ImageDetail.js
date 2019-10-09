import React from 'react';

import Modal from '../Modal/Modal';

import './ImageDetail.css';

const ImageDetail = ({ image, renderNextImage, renderPrevImage }) => {
  return (
    <Modal>
      <img src={image.urls.regular} alt={image.alt_description} className="image-detail__image"/>
      <p className="image-detail__description">{image.description}</p>
      <button onClick={renderNextImage}>Next Image</button>
      <button onClick={renderPrevImage}>Previous Image</button>
    </Modal>
  );
}

export default ImageDetail;
