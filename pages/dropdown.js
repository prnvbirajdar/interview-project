import React, { useState } from 'react';
import data from '../src/DropdownComponents/data';

export default function dropdown() {
  const [filteredList, setFilteredList] = useState([]);

  const [courseOptions, setCourseOptions] = useState([]);

  let coursesTags = data.map(({ tag }) => tag);
  coursesTags = [...new Set(coursesTags)];

  coursesTags.map(tag => console.log(tag));
  return (
    <>
      <section className="flex h-screen">
        <div className="container flex flex-col mx-auto w-2/3 border p-6 space-y-5">
          <form action="/action_page.php">
            <label htmlFor="courses">Choose a topic:</label>
            <select name="topic">
              {coursesTags?.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </section>
    </>
  );
}
