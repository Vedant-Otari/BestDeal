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
          <img src="./logo512.png" alt="" className="h-7" />
        </div>
        <hr />
        <div className="flex justify-around p-2 sm:justify-evenly sm:w-full lg:w-1/2 xl:w-1/3">
          <img src="./logo512.png" alt="" className="h-7 hidden sm:inline" />
        
          <Link to="/about"><u>About</u></Link>
          <Link to="/about"><u>Privacy</u></Link>
          <Link to="/about"><u>Developer</u></Link>
          
        </div>
      </footer>
    </>
  );
}