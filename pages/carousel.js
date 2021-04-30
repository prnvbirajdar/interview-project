import React from 'react';

const imgList = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1619630110059-13c4617ca2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1607543551362-9c1e4f4ac287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1607453813894-21f7b5cf201a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1606149407720-523a20a30f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1606145573422-4143383ee7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
  }
];

export default function carousel() {
  const [current, setCurrent] = React.useState(0);
  const length = imgList.length;

  const prevButton = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextButton = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <>
      <section className="relative flex justify-center items-center h-screen  ">
        {/* overflow-hidden mx-auto  */}

        <button
          onClick={nextButton}
          className="p-4 m-6 rounded-lg z-10 absolute right-0 bg-gray-200 bg-opacity-50 shadow hover:bg-opacity-75 transition-colors"
        >
          ▶️
        </button>
        <button
          onClick={prevButton}
          className="p-4 m-6 rounded-lg z-10 absolute left-0 bg-gray-200 bg-opacity-50 shadow hover:bg-opacity-75 transition-colors"
        >
          ◀️
        </button>
        {imgList.map((list, index) => {
          return (
            <div
              className={
                index === current
                  ? 'opacity-1 transition duration-500 '
                  : 'opacity-0 transition duration-500 transform scale-90'
              }
              key={index}
            >
              {index === current && (
                <img
                  src={list.image}
                  alt="image"
                  className="w-[1000px] h-[600px] rounded-lg "
                />
              )}
            </div>
          );
        })}
      </section>
      {/* 
      <section className="flex items-center h-screen"><div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5"></div></section> */}
    </>
  );
}
