import React from 'react';

export default function nav2() {
  const [isOpen, setIsOpen] = React.useState(false);

  console.log(isOpen);

  return (
    <>
      <div className="relative min-h-screen md:flex">
        {/* <!-- mobile menu bar --> */}
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          {/* <!-- logo --> */}
          <a href="#" className="block p-4 text-white font-bold z-50">
            Better Dev
          </a>

          {/* <!-- mobile menu button --> */}
          <button
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <Menu /> : <X />}
          </button>
        </div>

        {/* <!-- sidebar --> */}

        <div
          className={`sidebar bg-blue-800  text-blue-100 w-full md:w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out ${
            !isOpen ? '-translate-x-full' : 'none'
          }`}
        >
         
          {/* <!-- nav --> */}
          <nav className="text-center flex-col flex justify-center h-full space-y-10">
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Home
            </a>
            <p className={`${!isOpen}` ? 'hidden' : 'block'}>hi</p>
            <a
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              About
            </a>
            <a
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Features
            </a>
            <a
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Pricing
            </a>
          </nav>
        </div>

        {/* <!-- content --> */}
        <div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
      </div>
    </>
  );
}

const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   relative right-0 top-0
      className=" h-6 w-6 cursor-pointer z-40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
