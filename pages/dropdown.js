import React, { useState } from 'react';
import data from '../src/DropdownComponents/data';
import DropdownList from '../src/DropdownComponents/DropdownList';
import DropdownMenu from '../src/DropdownComponents/DropdownMenu';

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
          <DropdownMenu
            setSelectedTopic={setSelectedTopic}
            coursesTags={coursesTags}
          />
          <DropdownList selectedTopic={selectedTopic} newList={newList} data={data} />
        </div>
      </section>
    </>
  );
}
