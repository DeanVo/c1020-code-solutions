import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({
        todos: data
      }));
  }

  addTodo(newTodo) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };

    fetch('/api/todos', requestOptions)
      .then(response => response.json())
      .then(data => {
        const newState = this.state.todos;

        newState.push(data);
        this.setState({ todos: newState });
      });
  }

  toggleCompleted(todoId) {
    let todoIndex;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        todoIndex = i;
      }
    }

    const indexStatus = this.state.todos[todoIndex].isCompleted;

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isCompleted: !indexStatus
      })
    };

    fetch(`/api/todos/${todoId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const newState = this.state.todos;

        newState[todoIndex] = data;
        this.setState({ todos: newState });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
