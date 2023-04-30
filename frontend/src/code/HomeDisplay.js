  import axios from "axios";
  import React, { useState, useEffect } from "react";

  function callLink1() {
    return axios
      .get("http://127.0.0.1:8000/api/recomendations")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function callLink2() {
    return axios
      .get("http://127.0.0.1:8000/api/rankedItems")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  export default function HomeDisplay() {
    const randomItems = [];
    const mostCountItems = [];
    const [res1, setRes1] = useState(null);
    const [res2, setRes2] = useState(null);
    const handleSearchSubmit = (productName) => {
      window.location.href = `/result?query=${productName}`;
    };

    useEffect(() => {
      window.scrollTo(0, 0);
      call1();
      // call2();
      // alert("HELLO");
    }, []);

    async function call1() {
      const result1 = await callLink1();
      setRes1(result1);
      const result2 = await callLink2();
      setRes2(result2);
    }

    // async function call2() {
    //   const result = await callLink2();
    //   setRes2(result);
    // }

    if (!res1 || !res2) {
      return (
        <>
          <div className="justify-center flex mt-10 text-4xl text-black pt-32 h-[80vh] bg-gray-300">
            Content is Loading...
          </div>
        </>
      );
    }

    for (let i = 0; i < 5; i++) {
      console.log(res1);
      randomItems.push(
        <div
          key={i}
          onClick={() => handleSearchSubmit(res1[i].name)}
          className="hover:scale-105 duration-500 flex w-12 shadow-md hover:shadow-lg shadow-slate-500 flex-col cursor-pointer bg-white m-3 rounded-md aspect-[0.55] min-w-[13rem] overflow-hidden"
        >
          <img
            className="w-full cursor-pointer aspect-square object-contain p-1 my-2"
            src={res1[i].image}
            alt="abdcefg"
          />
          <div className="h-full flex flex-col justify-around bg-gray-600 p-3">
            <div className="cursor-pointer text-white text-ellipsis h-10 leading-5 font-sans overflow-hidden">{res1[i].name}</div>
          </div>
        </div>
      );
    }

    for (let i = 0; i < 5; i++) {
      console.log(res2);
      mostCountItems.push(
        <div
          key={i}
          onClick={() => handleSearchSubmit(res2[i].name)}
          className="hover:scale-105 duration-500 flex w-12 shadow-md hover:shadow-lg shadow-slate-500 flex-col cursor-pointer bg-white m-3 rounded-md aspect-[0.55] min-w-[13rem] overflow-hidden"
        >
          <img
            className="w-full cursor-pointer aspect-square object-contain p-1 my-2"
            src={res2[i].image}
            alt="abdcefg"
          />
          <div className="h-full flex flex-col justify-around bg-gray-600 p-3">
            <div className="cursor-pointer text-white text-ellipsis h-10 leading-5 font-sans overflow-hidden">{res2[i].name}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="p-6 text-center mt-10 bg-zinc-100 pt-16">
        <label className="text-3xl font-bold font-serif">
          People Also Searched:
        </label>
        <div className="flex w-full justify-center mt-10" id="randomItemsDiv">{randomItems}</div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <label className="text-3xl font-bold font-serif">
          Most Searched Products:
        </label>
        <div className="flex w-full justify-center mt-10" id="mostItemsDiv">{mostCountItems}</div>
      </div>
    );
  }
