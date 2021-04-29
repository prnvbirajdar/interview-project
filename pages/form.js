import { useState } from 'react';

const Form = () => {
  //const [input, setInput] = useState('');
  const [info, setInfo] = useState({
    name: '',
    password: '',
    email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (info.name.length <= 3) {
      console.log('Name should be atleast 3 characters long');
    }

    if (!info.email.toLowerCase().includes('@')) {
      console.log('enter valid email');
    }

    if (info.password.length <= 6) {
      console.log('Name should be atleast 6 characters long');
    }

  };

  console.log(info);

  return (
    <>
      <section className="flex items-center h-screen">
        <form
          className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={info.name}
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={info.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={info.password}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
