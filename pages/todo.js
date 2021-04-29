import { useState } from 'react';
import TodoInput from '../src/TodoComponents/TodoInput';
import TodoList from '../src/TodoComponents/TodoList';

export default function todo() {
  const [checkToggle, setCheckToggle] = useState(false);

  // const [editInput, setEditInput] = useState('');
  const [todoList, setTodoList] = useState([
    { title: '1todo', completed: false },
    { title: '2todo', completed: false },
    { title: '3todo', completed: false }
  ]);
  console.log(todoList);

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
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </section>
    </>
  );
}
