import React from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../Header'
import Todo from '../Todo'
import Form from '../Form'

import './index.css';

export default class App extends React.Component {

  state = {
    todos: this.props.todos
  };

  componentDidMount(){
    axios.get('http://localhost:3000/api/todos')
      .then(response => response.data)
      .then(todos => {this.setState({ todos })})
      .catch(this.handleError);
  }

  handleCheckboxChange = id => {
    axios.patch(`/api/todos/${id}`)
      .then(response => {
        const todos = this.state.todos.map(todo => {
          if(todo.id === id) todo = response.data;
          return todo;
        });
        this.setState({ todos });
      })
      .catch(this.handleError);

    
  };

  handleDeleteButtonClick = id =>  {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        const todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
      })
      .catch(this.handleError);
    
  }

  handleAdd = (title) => {
    axios.post('/api/todos', { title })
      .then(response => response.data)
      .then(todo => {
        let todos = [...this.state.todos, todo];

        this.setState({ todos }); 
      })
      .catch(this.handleError);    
  }

  handleEdit = (id, title) => {
    axios.put(`/api/todos/${id}`, {title})
      .then(response => {
        const todos = this.state.todos.map(todo => {
          if(todo.id === id) todo = response.data;
          return todo;
        });
        
        this.setState({ todos });
      })
      .catch(this.handleError); 
    
  }

  hhandleError(error){
    console.error(error.message);
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

