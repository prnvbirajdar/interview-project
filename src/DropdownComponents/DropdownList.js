import React from 'react';

export default function DropdownList({ selectedTopic, newList, data }) {
  return (
    <ul>
      {selectedTopic === '' || selectedTopic === 'All'
        ? data.map(({ id, course }) => (
            <li
              className="m-2 p-2 border bg-indigo-200 text-bold rounded-lg text-center"
              key={id}
            >
              {course}
            </li>
          ))
        : newList.map(({ id, course }) => (
            <li
              className="m-2 p-2 border bg-indigo-200 text-bold rounded-lg text-center"
              key={id}
            >
              {course}
            </li>
          ))}
    </ul>
  );
}
