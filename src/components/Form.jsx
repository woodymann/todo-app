import React from 'react'
import PropTypes from 'prop-types';

import Button from './Button'

export default function Todo({id, title, completed, onCheckboxChange, onButtonClick}){
  return(
    <form>
      <input type="text" />
      <Button>Add</Button>
    </form>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}