import React from "react";
import Header from "./Header";
import { useEffect } from "react";

export default function Developers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header showButton="show" />
      <div className="bg-gray-800 text-center text-white w-5/6 m-auto rounded-2xl mt-10 shadow-2xl shadow-black">
        <div className="h-60 bg-transparent mb-16 relative">
          <h1 className="text-6xl mb-4 absolute z-10 text-center w-full h-full flex justify-center items-center font-bold">Developers</h1>
          <img
            className="w-full h-full object-cover opacity-40 absolute rounded-t-2xl"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />

        </div>
        <div className="rounded-3xl p-5 py-10 text-white my-4 hover:bg-blue-700 scale-105 duration-500">
          <label className="font-serif text-4xl">Hrishikesh Hegishte</label>
          <br />
          A05 <br />
          1920000075 <br />
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl p-5 py-10 text-white my-4 hover:bg-blue-700 scale-105 duration-500">
          <label className="font-serif text-4xl">Vedant Otari</label>
          <br />
          A20 <br />
          1920000264 <br />
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl p-5 py-10 text-white my-4 hover:bg-blue-700 scale-105 duration-500">
          <label className="font-serif text-4xl">Sanket Khorate</label>
          <br />
          A30 <br />
          1920000369 <br />
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl p-5 py-10 text-white my-4 hover:bg-blue-700 scale-105 duration-500">
          <label className="font-serif text-4xl">Niketan Raskar</label>
          <br />
          A53 <br />
          1920000660 <br />
        </div>
      </div>
    </>
  );
}
