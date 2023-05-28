import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.js";

async function callLinkFlipkart() {
  try {
    const res1 = await axios.get(
      "http://127.0.0.1:8000/api/flipkart/" + productName
    );
    console.log(res1.data);
    return res1.data;
  } catch (err) {
    console.log(err);
  }
}

async function callLinkAmazon() {
  try {
    const res2 = await axios.get(
      "http://127.0.0.1:8000/api/amazon/" + productName
    );
    console.log(res2.data);
    return res2.data;
  } catch (err) {
    console.log(err);
  }
}

var productName = "";
export default function Result() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");
  productName = searchQuery;
  const handleSearchSubmit = (productName) => {
    window.location.href = `/productDetails?query=${productName}`;
  };

  const [resF, setResF] = useState(null);
  const [resA, setResA] = useState(null);
  useEffect(() => {
    callFlipkart();
    callAmazon();
  }, []);

  async function callFlipkart() {
    const result = await callLinkFlipkart();
    setResF(result);
  }

  async function callAmazon() {
    const result = await callLinkAmazon();
    setResA(result);
  }

  if (!resF && !resA) {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6 ">
            Searching for "{searchQuery}"
            <div className="inline font-serif dotLoading">.....</div>
          </h1>
          <div className="w-4/6  m-auto py-3 h-full loadingAnimation border-gray-400 rounded-2xl overflow-hidden border-2 bg-white">
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src="./img/defaultImage.jpg"
                alt=""
                className="h-60 aspect-square opacity-60 w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <label className="text-3xl bg-gray-400 h-10 rounded-l-xl w-full"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
              </div>
            </div>
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src="./img/defaultImage.jpg"
                alt=""
                className="h-60 aspect-square opacity-60 w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <label className="text-3xl bg-gray-400 h-10 rounded-l-xl w-full"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (!resA) {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6">
            Search results for "{searchQuery}"
          </h1>
          <div className="w-4/6 m-auto py-3 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-slate-500 border-2 bg-white">
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resF.image}
                alt=""
                onClick={() => handleSearchSubmit(resF.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <div className="block w-full">
                  <img
                    src="./fav1.png"
                    alt="Favourite"
                    className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-110"
                  />
                </div>
                <label
                  onClick={() => handleSearchSubmit(resF.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resF.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resF.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resF.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-700">
                    &#8377; {resF.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <a
                    href={resF.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6">
            Search results for "{searchQuery}"
          </h1>
          <div className="w-4/6 m-auto py-3 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-slate-500 border-2 bg-white">
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resF.image}
                alt=""
                onClick={() => handleSearchSubmit(resF.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <div className="block w-full">
                  <img
                    src="./fav1.png"
                    alt="Favourite"
                    className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-110"
                  />
                </div>
                <label
                  onClick={() => handleSearchSubmit(resF.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resF.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resF.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resF.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-600">
                    &#8377; {resF.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <a
                    href={resF.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>

            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resA.image}
                alt=""
                onClick={() => handleSearchSubmit(resA.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <div className="block w-full">
                  <img
                    src="./fav1.png"
                    alt="Favourite"
                    className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-110"
                  />
                </div>
                <label
                  onClick={() => handleSearchSubmit(resA.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resA.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resA.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resA.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-700">
                    &#8377; {resA.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <a
                    href={resA.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
