/* eslint-disable unicorn/no-null */
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [apiList, setApiList] = useState(null);

  // using fetch
  const getAPI = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const results = await resp.json();
    setApiList(results);
    return results;
  };

  // using axios
  const axiosGetApi = async () => {
    const resp = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(resp.data);
  };

  useEffect(() => {
    axiosGetApi();
  }, []);


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1
          className="text-5xl text-[#641231] text-center w-full border"
        >
          Welcome to Next.js!
        </h1>

        <button type="submit" onClick={getAPI}>
          Click me
        </button>

        {apiList &&
          apiList?.map(post => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
      </main>
    </div>
  );
}

export const sumPositiveNum = (num1, num2) => {
  if (num1 < 0 || num2 < 2) throw new Error('Num should be positive');

  return num1 + num2;
};

