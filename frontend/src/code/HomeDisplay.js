import axios from "axios";
import React, { useState, useEffect } from "react";

async function callLink1() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/recomendations");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function callLink2() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/rankedItems");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

function con_7_move_left() {
  let element = document.getElementById("randomItemsDiv");
  element.scrollLeft -= 0.2 * window.innerWidth;
  if (element.scrollLeft === 0 && con_7_max_right !== 0) {
    element.scrollLeft = con_7_max_right;
  }
}
let con_7_max_right = 0;
function con_7_move_right() {
  let element = document.getElementById("randomItemsDiv");
  element.scrollLeft += 0.2 * window.innerWidth;
  if (con_7_max_right === element.scrollLeft && con_7_max_right !== 0) {
    element.scrollLeft = 0;
  }
  if (con_7_max_right < element.scrollLeft) {
    con_7_max_right = element.scrollLeft;
  }
}

export default function HomeDisplay() {
  const randomItems = [];
  const mostCountItems = [];
  const loadingItems = [];
  const [res1, setRes1] = useState(null);
  const [res2, setRes2] = useState(null);
  const handleSearchSubmit = (productName) => {
    window.location.href = `/result?query=${productName}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    call1();
  }, []);

  async function call1() {
    const result1 = await callLink1();
    setRes1(result1);
    const result2 = await callLink2();
    setRes2(result2);
  }

  for (let i = 0; i < 5; i++) {
    loadingItems.push(
      <div
        key={i}
        className="flex w-12 flex-col bg-white m-1 rounded-md aspect-[0.6] min-w-[13rem] overflow-hidden"
      >
        <img
          className="w-full opacity-80"
          src="./img/defaultImage.jpg"
          alt=""
        />
        <div className="h-full flex flex-col justify-around bg-gray-400">
          <div className="h-10"></div>
        </div>
      </div>
    );
  }

  if (!res1 || !res2) {
    return (
      <>
        {/* <div className="justify-center flex mt-10 text-4xl text-black pt-32 h-[80vh] bg-gray-300">
            Content is Loading...
          </div> */}

        {/* <img src="./spinner.gif" alt="" className="absolute"/> */}
        <div className="p-6 text-center mt-10 bg-zinc-200 pt-16 loadingAnimation">
          <label className="block h-8 bg-gray-300 w-1/3 mx-auto rounded-full">
            {/* People Also Searched: */}
          </label>
          <div className="flex w-full justify-center mt-10">{loadingItems}</div>
        </div>
      </>
    );
  }

  for (let i = 0; i < 10; i++) {
    // console.log(res1);
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
          <div className="cursor-pointer text-white text-ellipsis h-10 leading-5 font-sans overflow-hidden">
            {res1[i].name}
          </div>
        </div>
      </div>
    );
  }

  for (let i = 0; i < 5; i++) {
    // console.log(res2);
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
        <div className="h-full flex flex-col justify-around bg-gray-600 p-3 relative">
          <div className="text-white text-ellipsis h-10 leading-5 font-sans overflow-hidden">
            {res2[i].name}
          </div>
          <div className="text-white bg-blue-600 absolute bottom-0 right-0 p-1 px-3 font-bold rounded-tl-sm">
            views: {res2[i].view_count}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-center mt-10 bg-zinc-100 pt-16">
      <label className="text-3xl font-bold font-serif">
        People Also Searched:
      </label>
      <div className="relative">
        <div
          id="arrowLeft"
          className="bg-transparent text-cyan-600 text-7xl hover:text-8xl duration-200 rounded-l-2xl absolute top-0 bottom-0 z-10 bg-gray-400 w-20 select-none align-center flex items-center justify-center left-0"
          onClick={con_7_move_left}
          onMouseOver={con_7_move_left}
        >
          &#10094;
        </div>
        <div
          className="flex w-full px-10 justify-start mt-10 overflow-x-auto scroll-smooth"
          id="randomItemsDiv"
        >
          {randomItems}
        </div>
        <div
          id="arrowRight"
          className="bg-transparent text-cyan-600 text-7xl hover:text-8xl duration-200 rounded-r-2xl absolute top-0 bottom-0 z-10 bg-gray-400 w-20 select-none align-center flex items-center justify-center right-0"
          onClick={con_7_move_right}
          onMouseOver={con_7_move_right}
        >
          &#10095;
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <label className="text-3xl font-bold font-serif">
        Most Searched Products:
      </label>
      <div className="flex w-full justify-center mt-10" id="mostItemsDiv">
        {mostCountItems}
      </div>
    </div>
  );
}
