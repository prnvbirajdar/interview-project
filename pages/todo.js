import { useState, useEffect } from 'react';
import SearchTodo from '../src/TodoComponents/SearchTodo';
import TodoInput from '../src/TodoComponents/TodoInput';
import TodoList from '../src/TodoComponents/TodoList';
// import useLocalStorage from '../src/TodoComponents/useLocalStorage';


export default function todo() {

  //  const [todoList, setTodoList] = useLocalStorage('todoUsingLocalStorageHook', []);

  const [todoList, setTodoList] = useState([]);

  const [filteredTodos, setFilteredTodos] = useState([]);

  // receives and stores the new todoList on every rerender 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodoList(storedTodos);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <section className="space-y-8 flex flex-col items-center border">
        <h1 className="text-center text-4xl">Todo App</h1>
        <SearchTodo todoList={todoList} setFilteredTodos={setFilteredTodos} />
        <TodoInput todoList={todoList} setTodoList={setTodoList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          filteredTodos={filteredTodos}
        />
      </section>
    </>
  );
}
