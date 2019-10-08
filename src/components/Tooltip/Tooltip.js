import React from 'react';

import './Tooltip.css';

const Tooltip = ({ message, className = '' }) => {
  return (
    <div className={`tooltip ${className}`}>
      <span className="tooltip__message">{message}</span>
    </div>
  );
}

export default Tooltip;
