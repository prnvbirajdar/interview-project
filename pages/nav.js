import React from 'react';
import Link from 'next/link';
import Sidebar from '../src/Sidebar/sidebar';

const navOptions = ['Home', 'Projects', 'Blog', 'About'];

export default function nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full border px-10 h-12 bg-blue-300">
        <div className="z-40">Logo</div>

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

        {!isOpen && (
          <div className=" block md:hidden" onClick={() => setIsOpen(true)}>
            <Menu />
          </div>
        )}
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} navOptions={navOptions} />
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
