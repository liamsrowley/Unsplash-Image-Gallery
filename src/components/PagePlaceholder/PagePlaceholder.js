import React from 'react';

import './PagePlaceholder.css';

const PagePlaceholder = ({ message, imageURL, imageAlt }) => {
  return (
    <div className="placeholder">
      <img src={imageURL} alt={imageAlt} className="placeholder__image"/>
      <h2 className="placeholder__title">{message}</h2>
    </div>
  );
}

export default PagePlaceholder;
