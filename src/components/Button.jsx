import React from 'react';
import PropTypes from 'prop-types';

export default function Button({icon, className, onClick}){


  return(
    <button className={className} onClick={onClick}>
      <i className="material-icons">{icon}</i>
    </button>
  )
}


Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}
