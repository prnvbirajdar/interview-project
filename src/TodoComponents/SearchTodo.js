import { useState, useEffect } from 'react';

export default function SearchTodo({
  todoList,
  setFilteredTodos
}) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredTodos(
      todoList.filter(todo =>
        todo.title.toLowerCase().includes(searchText.toLocaleLowerCase())
      )
    );
  }, [todoList, searchText]);

  return (
    <form className="space-x-4">
      <input
        className="border"
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </form>
  );
}
