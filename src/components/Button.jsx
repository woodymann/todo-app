import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props){

  const {icon, className, onClick, children} = props;

  return(
    <button className={className} onClick={onClick} {...props}>
      {
        icon ?
          <i className="material-icons">{icon}</i>
          :
          children
      }
      
    </button>
  )
}


Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
}
