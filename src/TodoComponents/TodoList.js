import { useState } from 'react';

export default function TodoList({ todoList, setTodoList, filteredTodos }) {
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

  const handleEdit = todoId => {
    // const newTodoList = todoList.filter((todo, index) => index !== id);
    const todo = todoList.find(todo => todo.id === todoId);

    console.log(todo);
  };

  return (
    <ul className="border w-1/4 space-y-3">
      {filteredTodos &&
        filteredTodos.map(({ id, title, completed }) => (
          <li key={id} className="space-x-5 flex">
            <button onClick={() => handleEdit(id)}>EDIT</button>
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
