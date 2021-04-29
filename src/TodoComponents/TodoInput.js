import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function TodoInput({ setTodoList, todoList }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input !== '') {
      setTodoList([
        { id: nanoid(10), title: input, completed: false },
        ...todoList
      ]);
      console.log('todo submitted');
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
