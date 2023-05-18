import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.js";

function callLinkFlipkart() {
  return axios
    .get("http://127.0.0.1:8000/api/flipkart/" + productName)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

var productName = "";
export default function Result() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");

  productName = searchQuery;

  const [res, setRes] = useState(null);
  useEffect(() => {
    callFlipkart();
  }, []);

  async function callFlipkart() {
    const result = await callLinkFlipkart();
    setRes(result);
  }

  if (!res) {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6 ">
            Searching for "{searchQuery}"<div className="inline font-serif dotLoading">.....</div>
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
  }

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
              src={res.image}
              alt=""
              className="h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
            />
            <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
              <label className="text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left">
                {res.name}
              </label>
              <label className="text-2xl font-bold font-sans">
                &#8377; {res.price}&nbsp;
                <label className="text-xl text-green-800">
                  ({parseFloat(res.discount).toFixed(2)}% off)
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-700">
                  &#8377; {res.mrp}
                </label>
              </label>
              <label className="text-lg">
                <a
                  href={res.link}
                  className="text-blue-800 underline italic hover:text-voilet-900"
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
