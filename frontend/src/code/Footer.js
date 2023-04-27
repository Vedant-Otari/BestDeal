import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Footer() {



  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight > 0;
      setIsStatic(!scrollable);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <footer
      //  style={{ position: isStatic ? 'relative' : 'fixed', bottom: 0 }}
      //  style={{ backgroundColor: isStatic ? 'red' : 'green', bottom: 0 }}
        className="sm:flex sm:text-lg bg-gray-800 justify-center w-full fixed bottom-0 text-white px-2 sm:py-1 lg:justify-start"
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
