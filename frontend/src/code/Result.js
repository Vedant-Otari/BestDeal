import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.js";

function callLink() {
  return axios
    .get("http://127.0.0.1:8000/api/flipkart/" + abc)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

var abc = "";
export default function Result() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");

  abc = searchQuery;

  const [res, setRes] = useState(null);
  useEffect(() => {
    call();
  }, []);

  async function call() {
    const result = await callLink();
    setRes(result);
  }

  if (!res) {
    return (
      <>
        <Header showButton="showSearch" />
        <div>
          <h1 className="text-4xl text-center font-mono">
            Best results for {searchQuery}
          </h1>
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
              <label className="text-3xl p-1 pl-3 bg-cyan-800 text-white w-full text-left">
                {res.name}
              </label>
              <label className="text-2xl font-bold font-sans">
                &#8377; {res.price}&nbsp;
                <label className="text-xl text-green-800">
                  ({parseFloat(res.discount).toFixed(2)}% off)
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
          <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
            <img
              src={res.image}
              alt=""
              className="h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
            />
            <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
              <label className="text-3xl p-1 pl-3 bg-cyan-800 text-white w-full text-left">
                {res.name}
              </label>
              <label className="text-2xl font-bold font-sans">
                &#8377; {res.price}&nbsp;
                <label className="text-xl text-green-800">
                  ({parseFloat(res.discount).toFixed(2)}% off)
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
          <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
            <img
              src={res.image}
              alt=""
              className="h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
            />
            <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
              <label className="text-3xl p-1 pl-3 bg-cyan-800 text-white w-full text-left">
                {res.name}
              </label>
              <label className="text-2xl font-bold font-sans">
                &#8377; {res.price}&nbsp;
                <label className="text-xl text-green-800">
                  ({parseFloat(res.discount).toFixed(2)}% off)
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
          <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
            <img
              src={res.image}
              alt=""
              className="h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
            />
            <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
              <label className="text-3xl p-1 pl-3 bg-cyan-800 text-white w-full text-left">
                {res.name}
              </label>
              <label className="text-2xl font-bold font-sans">
                &#8377; {res.price}&nbsp;
                <label className="text-xl text-green-800">
                  ({parseFloat(res.discount).toFixed(2)}% off)
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
