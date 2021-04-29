import { useState } from 'react';
import TodoInput from '../src/TodoComponents/TodoInput';
import TodoList from '../src/TodoComponents/TodoList';

export default function todo() {
  // const [checkToggle, setCheckToggle] = useState(false);

  // const [editInput, setEditInput] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, title: '1todo', completed: false },
    { id: 2, title: '2todo', completed: false },
    { id: 3, title: '3todo', completed: false }
  ]);
  console.log(todoList);

 

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
