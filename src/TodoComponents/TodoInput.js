import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function TodoInput({ setTodoList, todoList }) {
  const [input, setInput] = useState('');
  const { nanoid } = require('nanoid');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('todo submitted');
    if (input !== '') {
      setTodoList([
        { id: nanoid(10), title: input, completed: false },
        ...todoList
      ]);
    }
    setInput('');
  };

  return (
    <form className="space-x-4" onClick={handleSubmit}>
      <input
        className="border"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
