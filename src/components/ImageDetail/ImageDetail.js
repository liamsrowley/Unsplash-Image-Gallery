import React from 'react';

import Modal from '../Modal/Modal';

const ImageDetail = ({ image }) => {
  return (
    <Modal>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description}</p>
    </Modal>
  );
}

export default ImageDetail;
