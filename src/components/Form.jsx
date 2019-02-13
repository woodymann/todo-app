import React from 'react'
import PropTypes from 'prop-types';

import Button from './Button'

export default class Form extends React.Component{

  handleSubmit = (event) => {
    event.preventDefault();

    let title = this.refs.title.value;

    if(title){
      this.props.onAdd(title);
      this.refs.title.value = '';
    }
    
  }

  render(){

    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" placeholder="Enter task..."/>
        <Button type="submit">Add</Button>
      </form>
    )
  }
  
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
}

