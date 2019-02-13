import React from 'react'
import PropTypes from 'prop-types';

import Header from '../Header'
import Todo from '../Todo'

import './index.css';

export default class App extends React.Component {

  state = {
    todos: this.props.todos
  }

  handleCheckboxChange = id => {
    const { todos } = this.state;

    todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    })

    this.setState({ todos })
  };

  handleDeleteButtonClick = id =>  {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos }) 
  }

  render(){
    const {todos} = this.state;
    const {title} = this.props;

    return (
      <main>      
        <section className="todo-list">
            <Header title={title}/>
            {todos.map(({id, title, completed}) => 
              <Todo 
                key={id} 
                id={id} 
                title={title} 
                completed={completed} 
                onCheckboxChange={this.handleCheckboxChange}
                onButtonClick={this.handleDeleteButtonClick}
              />
            )}
        </section>
      </main>
    )
  }
  
}

App.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array
}

App.defaultProps = {
  title: 'React Todo'
}

