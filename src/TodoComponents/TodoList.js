export default function TodoList({ todoList, setTodoList }) {
  const handleDelete = id => {
    const newTodoList = todoList.filter((todo, index) => index !== id);
    setTodoList(newTodoList);
  };

  return (
    <ul className="border w-1/4 space-y-3">
      {todoList &&
        todoList.map((todo, index) => (
          <li key={index} className="space-x-5 flex">
            {/* <button onClick={() => handleEdit(index)}>EDIT</button> */}
            <span
              style={{
                textDecoration: todo?.completed ? 'line-through' : ''
              }}
              // onClick={() => toggleTodo(index)}
            >
              {todo?.title}
            </span>
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
    </ul>
  );
}
