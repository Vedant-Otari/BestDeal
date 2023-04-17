import React from "react";
import Header from "./Header";

export default function Developers() {
  return (
    <>
    <Header showButton="show"/>
      <div className="bg-gray-800 text-center text-white w-5/6 m-auto rounded-lg p-6">
        <h1 className="text-4xl mb-4">Developers</h1>
        <div className="w-3/4 m-auto rounded-3xl p-5 py-10 from-sky-300 to-blue-600 bg-gradient-to-b my-4">
          <label className="font-serif text-2xl">Hrishikesh Hegishte</label>
          <br />
          <label className="text-black">Roll No. - </label> A05 <br />
          <label className="text-black">PRN - </label> 1920000075 <br />
        </div>
        <div className="w-3/4 m-auto rounded-3xl p-5 py-10 from-sky-300 to-blue-600 bg-gradient-to-b my-4">
          <label className="font-serif text-2xl">Vedant Otari</label>
          <br />
          <label className="text-black">Roll No. - </label> A20 <br />
          <label className="text-black">PRN - </label> 1920000264 <br />
        </div>
        <div className="w-3/4 m-auto rounded-3xl p-5 py-10 from-sky-300 to-blue-600 bg-gradient-to-b my-4">
          <label className="font-serif text-2xl">Sanket Khorate</label>
          <br />
          <label className="text-black">Roll No. - </label> A30 <br />
          <label className="text-black">PRN - </label> 1920000369 <br />
        </div>
        <div className="w-3/4 m-auto rounded-3xl p-5 py-10 from-sky-300 to-blue-600 bg-gradient-to-b my-4">
          <label className="font-serif text-2xl">Niketan Raskar</label>
          <br />
          <label className="text-black">Roll No. - </label> A53 <br />
          <label className="text-black">PRN - </label> 1920000660 <br />
        </div>
      </div>
    </>
  );
}
