function TodoItem({todo, toggle, removeTodo}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() =>toggle(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
