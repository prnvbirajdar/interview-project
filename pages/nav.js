import React from 'react';
import Link from 'next/link';
import Sidebar from '../src/Nav/sidebar';

const navOptions = ['Home', 'Projects', 'Blog', 'About'];

export default function nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="fixed top-0     flex justify-between items-center w-full border px-10 h-12 bg-blue-300">
        <div className=" z-40">Logo</div>

        <nav className="md:block hidden">
          <ul className="flex space-x-10 ">
            {navOptions.map((option, index) => {
              return (
                <li key={index}>
                  <Link href="/">
                    <a>{option}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className=" block md:hidden z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <Menu /> : <X />}
        </div>

        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navOptions={navOptions}
        />
      </header>
      <main>
        <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
         <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
         <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
         <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
         <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
         <img
          src="https://images.unsplash.com/photo-1619958405137-8dc6281021bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
        
      </main>
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
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
      className=" h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
