import React from 'react'
import PropTypes from 'prop-types';

import Button from './Button'

export default class Form extends React.Component{

  state = {
    title: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    let title = this.state.title;

    if(title){
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
    
  }

  handleChange = event => {
    let title = event.target.value;

    this.setState({ title });
  }

  render(){

    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} placeholder="Enter task..." onChange={this.handleChange}/>
        <Button type="submit">Add</Button>
      </form>
    )
  }
  
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
}

