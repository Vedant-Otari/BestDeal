import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: scrolled ? "#f4f4f4e6" : "transparent",
    boxShadow: scrolled ? "0px 0px 7px grey" : "0px 0px 0px white",
  };

  if (props.showButton === "show") {
    return (
      <>
        <div
          className="flex justify-between sticky w-full bg-transparent top-0 duration-700 z-50"
          style={headerStyle}
        >
          <div className="ml-4 hover:scale-105 duration-100 ">
            <Link to="/">
              <u className="hover:text-cyan-300">
                <img src="./2.png" alt="" className="h-12" />
              </u>
            </Link>
          </div>
        <Link to="/profile">
          <div className="flex items-center justify-center bg-yellow-600 text-white text-2xl font-bold h-full rounded-full aspect-square mx-20">
            P
          </div>
        </Link>
          <Link to="/login">
            <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
              <u className="no-underline">LOGIN</u>
            </button>
          </Link>
        </div>
      </>
    );
  }
  else if(props.showButton === "showSearch"){
    return (
      <>
        <div
          className="flex justify-between border-gray-300 border-b-[1px] sticky w-full bg-transparent top-0 duration-700 z-50 pb-3 pt-1"
          style={headerStyle}
        >
          <div className="ml-4 hover:scale-105 duration-100 ">
            <Link to="/">
              <u className="hover:text-cyan-300">
                <img src="./2.png" alt="" className="h-12" />
              </u>
            </Link>
          </div>
          <Search showInlineSearchBar="show"/>
        <Link to="/profile">
          <div className="flex items-center justify-center bg-yellow-600 text-white text-2xl font-bold h-full rounded-full aspect-square mx-20">
            P
          </div>
        </Link>
          <Link to="/login">
            <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
              <u className="no-underline">LOGIN</u>
            </button>
          </Link>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div
          className="flex flex-row-reverse sticky w-full bg-transparent top-0 duration-700 z-50"
          style={headerStyle}
        >
        <Link to="/profile">
          <div className="flex items-center justify-center bg-yellow-600 text-white text-2xl font-bold h-full rounded-full aspect-square mx-20">
            P
          </div>
        </Link>
          <Link to="/login">
            <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
              <u className="no-underline">LOGIN</u>
            </button>
          </Link>
        </div>
      </>
    );
  }
}
