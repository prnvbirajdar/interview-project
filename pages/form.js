import useForm from '../src/Form/useForm';

const Form = () => {
  const {
    handleChange,
    handleSubmit,
    info,
    nameError,
    emailError,
    passwordError,
    successLogin
  } = useForm();

  return (
    <>
      {!successLogin ? (
        <section className="flex items-center h-screen">
          <form
            className="container flex flex-col mx-auto w-1/3 border p-6 space-y-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              className="border-gray-500 focus:border-indigo-900 focus:ring-indigo-600 rounded-lg shadow-sm"
              type="text"
              value={info.name}
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {nameError && <div className="text-red-700">{nameError}</div>}
            <label htmlFor="email">Email</label>
            <input
              className="border-gray-500 focus:border-indigo-900 focus:ring-indigo-600 rounded-lg shadow-sm"
              type="text"
              value={info.email}
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {emailError && <div className="text-red-700">{emailError}</div>}

            <label htmlFor="password">Password</label>
            <input
              className="border-gray-500 focus:border-indigo-900 focus:ring-indigo-600 rounded-lg shadow-sm"
              type="password"
              value={info.password}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {passwordError && (
              <div className="text-red-700">{passwordError}</div>
            )}

            <input type="checkbox" className="h-5 w-5 rounded text-indigo-500 border-gray-500 focus:ring-indigo-500"/>

            <button type="submit">Submit</button>
          </form>
        </section>
      ) : (
        <section className="flex items-center h-screen">
          <div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5">
            LOGIN SUCCESS
          </div>
        </section>
      )}
    </>
  );
};

export default Form;
