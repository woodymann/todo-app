import React from 'react'
import PropTypes from 'prop-types';

import Checkbox from './Checkbox'
import Button from './Button'

export default function Todo({id, title, completed, onCheckboxChange, onButtonClick}){
  return(
    <div className={`todo${completed ? ' completed' : ''}`}>
      <Checkbox 
        isChecked={completed} 
        onChange={() => onCheckboxChange(id)}        
      />      
      <span className="todo-title">
        {title}
      </span>
      <Button className="delete icon" icon="delete" onClick={() => onButtonClick(id)}/>
    </div>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}