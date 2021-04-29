const Form = () => {
  return (
    <>
      <section className="flex items-center h-screen">
        <form className="container flex flex-col mx-auto w-2/3 border p-6">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" onChange />
          <label>Email</label>
          <input type="text" placeholder="Enter your email" onChange />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" onChange />
          <label></label>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
