import axios from 'axios';
import React, { useState, useEffect } from 'react';

function abcd(x) {
  alert('Clicked');
}

function callLink1() {
  return axios
    .get('http://127.0.0.1:8000/api/recomendations')
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function callLink2() {
  return axios
    .get('http://127.0.0.1:8000/api/rankedItems')
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function HomeDisplay() {
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const randomItems = [];
  const mostCountItems = [];
  const [res1, setRes1] = useState(null);
  const [res2, setRes2] = useState(null);
  // let image = 'https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg';

  useEffect(() => {
    call1();
  }, []);

  useEffect(() => {
    call2();
  }, []);

  async function call1() {
    const result = await callLink1();
    setRes1(result);
  }

  async function call2() {
    const result = await callLink2();
    setRes2(result);
  }

  if (!res1 || !res2) {
    return <>
      <div className='justify-center flex text-4xl text-black pt-10 h-[80vh] bg-white'>
        Content is Loading...
      </div>
    </>;
  }

  for (let i = 0; i < 5; i++) {
    console.log(res1);
    randomItems.push(
      <div
        key={i}
        onClick={abcd}
        className="hover:scale-105 duration-500 flex w-12 flex-col cursor-pointer bg-white border-blue-800 border-2 m-2 rounded-3xl aspect-[0.6] min-w-[13rem] overflow-hidden"
      >
        <img
          className="w-full cursor-pointer aspect-square object-contain"
          src={res1[i].image}
          alt="abdcefg"
        />
        <label className=" cursor-pointer">{res1[i].name}</label>
        <label className=" cursor-pointer">Rs. {res1[i].price}</label>
      </div>
    );
  }

  for (let i = 0; i < 5; i++) {
    console.log(res2);
    mostCountItems.push(
      <div
        key={i}
        onClick={abcd}
        className="hover:scale-105 duration-500 flex w-12 flex-col cursor-pointer bg-white border-blue-800 border-2 m-2 rounded-3xl aspect-[0.6] min-w-[13rem] overflow-hidden"
      >
        <img
          className="w-full cursor-pointer aspect-square object-contain"
          src={res2[i].image}
          alt="abdcefg"
        />
        <label className=" cursor-pointer">{res2[i].name}</label>
        <label className=" cursor-pointer">Rs. {res2[i].price}</label>
      </div>
    );
  }


  return (
    <div className="p-6 text-center mt-10">
      <label className="text-2xl font-bold font-serif">People also searched</label>
      <div className="flex w-full justify-center mt-10">{randomItems}</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <label className="text-2xl font-bold font-serif">Most searched products</label>
      <div className="flex w-full justify-center mt-10">{mostCountItems}</div>
    </div>
  );
}