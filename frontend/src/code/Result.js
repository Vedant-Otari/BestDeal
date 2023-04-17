import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.js";

function callLink() {
  return axios
    .get("http://127.0.0.1:8000/api/flipkart/" + abc)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

var abc = "";
export default function Result() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");
  abc = searchQuery.replace(/\s/g, "");
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
      <Header showButton="show"/>
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
    <Header showButton="show"/>
      <div>
        <h1 className="text-4xl text-center font-mono">
          Best results for {searchQuery}
        </h1>
        <div className="w-3/5 m-auto">
          <div className="border-black border-2 rounded-lg p-2 flex justify-evenly m-4">
            <img
              src={res.image}
              alt=""
              className="h-60 aspect-square w-1/4 object-contain bg-white rounded-xl"
            />
            <div className="flex flex-col justify-around w-3/4 text-center py-5">
              <label className="text-3xl font-bold">Rs. {res.price}</label>
              <label className="text-xl">{res.name} </label>
              <label className="text-xl font-bold">
                Discount: {parseFloat(res.discount).toFixed(2)}%{" "}
              </label>
              <label className="text-xl">
                <a
                  href={res.link}
                  className="text-blue-800 underline italic hover:text-voilet-900"
                  target="_blank"
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
