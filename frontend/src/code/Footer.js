import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <>
      <footer
        className="sm:flex sm:text-lg bg-gray-800 justify-center fixed bottom-0 w-full text-white px-2 sm:py-1 lg:justify-start"
        id="main-footer"
      >
        <div className="flex justify-center p-2 sm:hidden">
          <Link to="/" className="w-full">
            <img src="./logo512.png" alt="" className="h-6 m-auto" />
          </Link>
        </div>
        <hr />
        <div className="flex justify-around p-3 sm:justify-evenly sm:w-full lg:w-1/2 xl:w-1/3">
          <Link to="/" className=" hidden sm:inline">
            <img src="./logo512.png" alt="" className="h-7" />
          </Link>
          <Link to="/about">
            <u className="hover:text-cyan-300">About</u>
          </Link>
          <Link to="/developers">
            <u className="hover:text-cyan-300">Developer</u>
          </Link>
        </div>
      </footer>
    </>
  );
}
