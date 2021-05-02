import React from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen , setIsOpen, navOptions}) {
  return (
    isOpen && (
      <aside className="fixed top-0 left-0 w-full h-full bg-gray-600 z-30">
        <div
          className="flex justify-end mr-10 mt-3 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </div>
        <nav className="text-center ">
          <ul className="flex flex-col justify-center h-screen">
            {navOptions.map((option, index) => {
              return (
                <li key={index} className="m-10">
                  <Link href="/">
                    <a>{option}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    )
  );
}

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="relative right-0 top-0 h-6 w-6"
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
