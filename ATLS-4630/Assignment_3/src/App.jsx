import { useState } from 'react';
import TodoList from './todo_list';
import AddTodoForm from './adding_toDo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete Homework", done: false },
    { id: 2, text: "Clean room", done: false },
    { id: 3, text: "Study", done: false },
    { id: 4, text: "Go grocery shopping", done: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Autumn's To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggle={toggle} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
