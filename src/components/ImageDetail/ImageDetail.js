import React from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from 'react-icons/io';

import Modal from '../Modal/Modal';
import './ImageDetail.css';

const ImageDetail = ({ image, renderNextImage, renderPrevImage, closeActiveImage }) => {
  return (
    <Modal>
      <div className="image-detail">
        <img src={image.urls.regular} alt={image.alt_description} className="image-detail__image"/>
        <p className="image-detail__description">{image.description}</p>
      </div>
      <div className="image-detail__controls">
        <button onClick={closeActiveImage} className="control control--close"><IoIosClose /></button>
        <button onClick={renderPrevImage} className="control control--prev"><IoIosArrowBack /></button>
        <button onClick={renderNextImage} className="control control--next"><IoIosArrowForward /></button>
      </div>
    </Modal>
  );
}

export default ImageDetail;
