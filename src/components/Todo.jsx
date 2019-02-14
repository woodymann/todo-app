import React from 'react'
import PropTypes from 'prop-types';

import Checkbox from './Checkbox'
import Button from './Button'

export default class Todo extends React.Component{

  state = {
    editing: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.refs.title.value;
    const { id, onEdit } = this.props;

    onEdit(id, title);

    this.setState({ editing: false })
  }

  renderForm(){
    
    const { title } = this.props;

    return(
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title"  defaultValue={title}/>
        <Button className="save icon" icon="save" type="submit"/>
      </form>
    )
  }

  renderDisplay(){
    
    const {id, title, completed, onCheckboxChange, onButtonClick} = this.props;

    return(
      <div className={`todo${completed ? ' completed' : ''}`}>
        <Checkbox 
          isChecked={completed} 
          onChange={() => onCheckboxChange(id)}        
        />      
        <span className="todo-title">
          {title}
        </span>
        <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })}/>
        <Button className="delete icon" icon="delete" onClick={() => onButtonClick(id)}/>
        
      </div>
    )
  }

  render(){
    const { editing } = this.state;

    return(
      editing ? this.renderForm() : this.renderDisplay()
    )
  }  
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}