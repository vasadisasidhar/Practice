import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css';


function Todoapp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todoapp;
