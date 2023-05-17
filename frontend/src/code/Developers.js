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
      <div className="mb-10 bg-gray-800 text-center text-white w-5/6 m-auto rounded-2xl mt-10 shadow-2xl shadow-black">
        <div className="h-60 bg-transparent relative">
          <h1 className="text-7xl mb-4 absolute z-10 text-center w-full h-full flex justify-center items-center font-bold">Developers</h1>
          <img
            className="w-full h-full object-cover opacity-40 absolute rounded-t-2xl"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />

        </div>
        <div className="rounded-3xl hover:shadow-black hover:shadow-xl p-5 hover:pt-9 text-white my-4 hover:bg-sky-700 hover:scale-105 duration-700">
          <img src="./img/hrishikesh.jpg" alt="Hrishikesh" className="w-16 h-16 mr-5 mb-3 object-contain align-middle inline-block mx-auto border-white border-solid border-[3px] rounded-full bg-red-300" />
          <label className="font-serif text-4xl">Hrishikesh Hegishte</label>
          <br />
          <div className="w-5/6 my-6 mx-auto">
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
              <img title="Roll Number" src="./user.png" alt="" className="h-7 align-text-bottom inline pr-2"/>
              A-05
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="PRN" src="./id_card.png" alt="" className="h-7 align-baseline inline pr-2"/>
            1920000075
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="LinkedIn" src="./lin.png" alt="" className="h-6 align-baseline inline pr-2"/>
            
              <a href="https://www.linkedin.com/in/hrishikesh-hegishte-0971251b7/" target="_blank"  rel="noopener noreferrer">hrishikesh-hegishte-0971251b7</a>
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="GitHub" src="./github.png" alt="" className="h-7 align-baseline inline pr-2"/>
              <a href="https://github.com/hrishi135" target="_blank"  rel="noopener noreferrer">hrishi135</a>
            </div>
          </div>
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl hover:shadow-black hover:shadow-xl p-5 hover:pt-9 text-white my-4 hover:bg-sky-700 hover:scale-105 duration-700">
        <img src="./img/vedant.jpg" alt="Vedant" className="w-16 h-16 mr-5 mb-3 object-contain align-middle inline-block mx-auto border-white border-solid border-[3px] rounded-full bg-red-300" />
          <label className="font-serif text-4xl">Vedant Otari</label>
          <br />
          <div className="w-5/6 my-6 mx-auto">
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
              <img title="Roll Number" src="./user.png" alt="" className="h-7 align-text-bottom inline pr-2"/>
              A-20
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="PRN" src="./id_card.png" alt="" className="h-7 align-baseline inline pr-2"/>
            1920000264
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="LinkedIn" src="./lin.png" alt="" className="h-6 align-baseline inline pr-2"/>

              <a href="https://www.linkedin.com/in/vedant-otari/" target="_blank"  rel="noopener noreferrer">vedant-otari</a>
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="GitHub" src="./github.png" alt="" className="h-7 align-baseline inline pr-2"/>
              <a href="https://github.com/Vedant-Otari" target="_blank"  rel="noopener noreferrer">Vedant-Otari</a>
            </div>
          </div>
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl hover:shadow-black hover:shadow-xl p-5 hover:pt-9 text-white my-4 hover:bg-sky-700 hover:scale-105 duration-700">
        <img src="./img/sanket.jpg" alt="Sanket" className="w-16 h-16 mr-5 mb-3 object-contain align-middle inline-block mx-auto border-white border-solid border-[3px] rounded-full bg-red-300" />
          <label className="font-serif text-4xl">Sanket Khorate</label>
          <br />
          <div className="w-5/6 my-6 mx-auto">
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
              <img title="Roll Number" src="./user.png" alt="" className="h-7 align-text-bottom inline pr-2"/>
              A-30
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="PRN" src="./id_card.png" alt="" className="h-7 align-baseline inline pr-2"/>
            1920000369
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="LinkedIn" src="./lin.png" alt="" className="h-6 align-baseline inline pr-2"/>

              <a href="https://www.linkedin.com/in/sanket-khorate/" target="_blank"  rel="noopener noreferrer">sanket-khorate</a>
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="GitHub" src="./github.png" alt="" className="h-7 align-baseline inline pr-2"/>
              <a href="https://github.com/SanketK-25" target="_blank"  rel="noopener noreferrer">SanketK-25</a>
            </div>
          </div>
        </div>
        <div className="bg-white h-1"></div>
        <div className="rounded-3xl hover:shadow-black hover:shadow-xl p-5 hover:pt-9 text-white my-4 hover:bg-sky-700 hover:scale-105 duration-700">
        <img src="./img/niketan.jpg" alt="Niketan" className="w-16 h-16 mr-5 mb-3 object-contain align-middle inline-block mx-auto border-white border-solid border-[3px] rounded-full bg-red-300" />
          <label className="font-serif text-4xl">Niketan Raskar</label>
          <br />
          <div className="w-5/6 my-6 mx-auto">
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
              <img title="Roll Number" src="./user.png" alt="" className="h-7 align-text-bottom inline pr-2"/>
              A-53
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="PRN" src="./id_card.png" alt="" className="h-7 align-baseline inline pr-2"/>
            1920000660
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="LinkedIn" src="./lin.png" alt="" className="h-6 align-baseline inline pr-2"/>

              <a href="https://www.linkedin.com/in/niketan-raskar-663bb7189/" target="_blank"  rel="noopener noreferrer">niketan-raskar-663bb7189</a>
            </div>
            <div className="w-1/2 py-4 text-left pl-[15%] inline-block text-xl font-sans p-0 m-0">
            <img title="GitHub" src="./github.png" alt="" className="h-7 align-baseline inline pr-2"/>
              <a href="https://github.com/Niketan2001" target="_blank"  rel="noopener noreferrer">Niketan2001</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
