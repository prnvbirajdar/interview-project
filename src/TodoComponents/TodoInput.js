import { useState } from 'react';

export default function TodoInput({ setTodoList, todoList }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('todo submitted');
    if (input !== '') {
      setTodoList([...todoList, { title: input, completed: false }]);
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
