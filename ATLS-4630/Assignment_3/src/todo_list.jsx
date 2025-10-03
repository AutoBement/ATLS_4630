import TodoItem from './todo_Item';

function TodoList({todos, toggle, removeTodo}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggle={toggle}
            removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
