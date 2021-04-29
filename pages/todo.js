import { useState } from 'react';
import TodoInput from '../src/TodoComponents/TodoInput';

export default function todo() {
  const [checkToggle, setCheckToggle] = useState(false);

  // const [editInput, setEditInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);


  const handleDelete = id => {
    const newTodoList = todoList.filter((todo, index) => index !== id);
    setTodoList(newTodoList);
  };

  //   const handleEdit = id => {
  //     // const newTodoList = todoList.filter((todo, index) => index !== id);
  //     const todo = todoList.filter((todo, index) => index === id);
  //     const todoString = todo[0];
  //     setInput(todoString.title);
  //     console.log(todo[0]);
  //   };

  const toggleTodo = id => {
    const newList = todoList.map(({ title, completed }, index) => {
      id === index ? { title, completed: !completed } : { title, completed };
    });

    console.log(newList);

    //setTodoList(newList);
  };

  return (
    <>
      <section className="space-y-8 flex flex-col items-center border">
        <h1 className="text-center text-4xl">Todo App</h1>

        <TodoInput todoList={todoList} setTodoList={setTodoList} />
       
        <ul className="border w-1/4 space-y-3">
          {todoList &&
            todoList.map((todo, index) => (
              <li key={index} className="space-x-5 flex">
                {/* <button onClick={() => handleEdit(index)}>EDIT</button> */}
                <span
                  style={{
                    textDecoration: todo?.completed ? 'line-through' : ''
                  }}
                  onClick={() => toggleTodo(index)}
                >
                  {todo?.title}
                </span>
                <button onClick={() => handleDelete(index)}>X</button>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
