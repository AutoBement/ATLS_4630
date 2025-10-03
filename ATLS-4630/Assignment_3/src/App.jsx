import TodoList from './todo_list';

function App() {
  const todos = [
    { id: 1, text: "Complete homework", done: false },
    { id: 2, text: "Sweep the floors", done: true },
    { id: 3, text: "Clean bathroom", done: false },
    { id: 4, text: "Take out trash", done: true }
  ];

  return (
    <div>
      <h1>Autumn's To-Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
