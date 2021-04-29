export default function TodoList({ todoList, setTodoList }) {
  const handleDelete = todoId => {
    const newTodoList = todoList.filter(({ id }) => id !== todoId);
    setTodoList(newTodoList);
  };

  const toggleTodo = todoId => {
    const newList = todoList.map(todo => {
      if (todoId === todo.id) {
        const updatedTodo = { ...todo, completed: !todo.completed };

        console.log(updatedTodo);
        return updatedTodo;
      }

      return newList;
    });

    console.log(newList);

    //setTodoList(newList);
  };

  return (
    <ul className="border w-1/4 space-y-3">
      {todoList &&
        todoList.map(({ id, title, completed }) => (
          <li key={id} className="space-x-5 flex">
            {/* <button onClick={() => handleEdit(index)}>EDIT</button> */}
            <span
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }}
              onClick={() => toggleTodo(id)}
            >
              {title}
            </span>
            <button onClick={() => handleDelete(id)}>X</button>
          </li>
        ))}
    </ul>
  );
}
