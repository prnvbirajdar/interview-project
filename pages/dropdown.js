import React, { useState } from 'react';
import data from '../src/DropdownComponents/data';

export default function dropdown() {
  const [selectedTopic, setSelectedTopic] = useState('');

  let coursesTags = data.map(({ tag }) => tag);
  coursesTags = [...new Set(coursesTags)];

  const newList = data.filter(({ tag }) => tag === selectedTopic);

  console.log(newList);
  return (
    <>
      <section className="flex h-screen">
        <div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5">
          <form action="/action_page.php">
            <label htmlFor="courses">Choose a topic:</label>
            <select
              className="border bg-gray-100 w-full p-2 rounded-md"
              name="topic"
              onChange={e => setSelectedTopic(e.target.value)}
            >
              <option value="All">All</option>
              {coursesTags?.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </form>
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
        </div>
      </section>
    </>
  );
}
