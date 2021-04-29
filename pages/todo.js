import { useState } from 'react';
import SearchTodo from '../src/TodoComponents/SearchTodo';
import TodoInput from '../src/TodoComponents/TodoInput';
import TodoList from '../src/TodoComponents/TodoList';

export default function todo() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '1todo', completed: false },
    { id: 2, title: '2todo', completed: false },
    { id: 3, title: '3todo', completed: false }
  ]);
  console.log(todoList);

  const [filteredTodos, setFilteredTodos] = useState([]);

  //console.log(filteredTodos);

  return (
    <>
      <section className="space-y-8 flex flex-col items-center border">
        <h1 className="text-center text-4xl">Todo App</h1>
        <SearchTodo
          todoList={todoList}
          setTodoList={setTodoList}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
      </section>
    </>
  );
}
