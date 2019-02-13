import React from 'react';

import PropTypes from 'prop-types';

export default function Checkbox({isChecked, onChange}){

  const state = isChecked ? 'check_box' : 'check_box_outline_blank';

  return(
    <button className="checkbox icon" onClick={onChange}>
      <i className="material-icons">{state}</i>
    </button>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired
}
