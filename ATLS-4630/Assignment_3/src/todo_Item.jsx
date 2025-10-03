function TodoItem({ todo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.done} readOnly />
      {todo.text}
      <button>  Remove</button>
    </li>
  );
}

export default TodoItem;
