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
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
        <button
          onClick={getAPI}
          className="text-5xl text-[#641231] text-center w-full border"
        >
          Welcome to Next.js!
        </button>

        {apiList &&
          apiList?.map(post => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}

        {/* <section className="container mx-auto border text-center">
          <div>
            <img
              className="h-80 mx-auto object-fit"
              src="/picture.jpg"
              alt="Profile"
            />
          </div>
        </section> */}
      </main>
    </div>
  );
}
