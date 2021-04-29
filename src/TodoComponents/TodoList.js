export default function TodoList({ todoList, setTodoList }) {
  const [editInput, setEditInput] = useState('');


  const handleDelete = todoId => {
    const newTodoList = todoList.filter(({ id }) => id !== todoId);
    setTodoList(newTodoList);
  };

  const toggleTodo = todoId => {
    const newList = todoList.map(item => {
      if (item.id === todoId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodoList(newList);
  };

   //   const handleEdit = id => {
  //     // const newTodoList = todoList.filter((todo, index) => index !== id);
  //     const todo = todoList.filter((todo, index) => index === id);
  //     const todoString = todo[0];
  //     setInput(todoString.title);
  //     console.log(todo[0]);
  //   };

  return (
    <ul className="border w-1/4 space-y-3">
      {todoList &&
        todoList.map(({ id, title, completed }) => (
          <li key={id} className="space-x-5 flex">
             <button onClick={() => handleEdit(index)}>EDIT</button> 
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
