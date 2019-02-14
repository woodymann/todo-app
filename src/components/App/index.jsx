import React from 'react'
import PropTypes from 'prop-types';

import Header from '../Header'
import Todo from '../Todo'
import Form from '../Form'

import './index.css';

export default class App extends React.Component {

  state = {
    todos: this.props.todos
  };

  nextId(){
    this._nextId = this._nextId || 5;
    return this._nextId++;
  };

  handleCheckboxChange = id => {
    const todos = this.state.todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos });
  };

  handleDeleteButtonClick = id =>  {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos }) ;
  }

  handleAdd = (title) => {
    let todo = {
      id: this.nextId(),
      title: title,
      completed: false
    };

    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  }

  handleEdit = (id, title) => {
    const todos = this.state.todos.map(todo => {
      if(todo.id === id) todo.title = title;
      return todo;
    });

    this.setState({ todos });
  }

  render(){
    const {todos} = this.state;
    const {title} = this.props;

    return (
      <main>      
        <section className="todo-list">
            <Header title={title} initialData={todos}/>
            <Form onAdd={this.handleAdd}/>
            {todos.map(({id, title, completed}) => 
              <Todo 
                key={id} 
                id={id} 
                title={title} 
                completed={completed} 
                onCheckboxChange={this.handleCheckboxChange}
                onButtonClick={this.handleDeleteButtonClick}
                onEdit={this.handleEdit}
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

