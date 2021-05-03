import React, { useState } from 'react';
import data from '../src/DropdownComponents/data';
import DropdownList from '../src/DropdownComponents/DropdownList';
import DropdownMenu from '../src/DropdownComponents/DropdownMenu';

export default function dropdown() {
  const [selectedTopic, setSelectedTopic] = useState('');

  // coursesTags give a string of all tags
  let coursesTags = data.map(({ tag }) => tag);
  // removes all repeated tags
  coursesTags = [...new Set(coursesTags)];

  // filteredList according to tag selected
  const newList = data.filter(({ tag }) => tag === selectedTopic);

  return (
    <>
      <section className="flex h-screen">
        <div className="container flex flex-col mx-auto w-1/3 border p-6 space-y-5">
          <DropdownMenu
            setSelectedTopic={setSelectedTopic}
            coursesTags={coursesTags}
          />
          <DropdownList
            selectedTopic={selectedTopic}
            newList={newList}
            data={data}
          />
        </div>
      </section>
    </>
  );
}
