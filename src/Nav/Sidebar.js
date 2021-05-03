import React from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, navOptions }) {
  return (
    <aside
      className={`fixed top-0 left-0 w-full h-screen bg-gray-100 z-30 transform  transition duration-300 ease-in-out
    ${!isOpen ? '-translate-x-full' : 'none'}`}
    >
      <nav className="text-center ">
        <ul className="flex flex-col justify-center h-screen">
          {navOptions.map((option, index) => {
            return (
              <li key={index} className="m-10 text-lg">
                <Link href="/">
                  <a>{option}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
