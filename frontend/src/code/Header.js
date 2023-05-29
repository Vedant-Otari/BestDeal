import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    const checkIfUserIsLoggedIn = () => {
      const cookies = document.cookie;
      const isLoggedIn = cookies.includes("bestdeal");
      setIsLoggedIn(isLoggedIn);
    };

    checkIfUserIsLoggedIn();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: scrolled ? "#f4f4f4e6" : "transparent",
    boxShadow: scrolled ? "0px 0px 7px grey" : "0px 0px 0px white",
  };
  const handleLogout = () => {
    document.cookie =
      "bestdeal=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Remove the specific cookie here or perform any other logout-related tasks
    // For example, you can use the "universal-cookie" library to remove the cookie
    // import { Cookies } from "react-cookie";
    // const cookies = new Cookies();
    // cookies.remove("your-cookie-name");

    // Redirect the user to the login page
    window.location.href = "/login";
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
          <div className="flex items-center">
            {isLoggedIn && (
              <Link to="/profile">
                <div className="h-10 rounded-full overflow-hidden border-2 border-blue-600">
                  <img src="./img/default.jpg" alt="" className="h-10" />
                </div>
              </Link>
            )}

            {isLoggedIn ? ( // Render the logout button if the user is logged in
              <button
                className="bg-red-500 p-2 text-white border-[1px] border-cyan-800 font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-red-800"
                onClick={handleLogout}
              >
                <u className="no-underline">LOGOUT</u>
              </button>
            ) : (
              // Render the login button if the user is not logged in
              <Link to="/login">
                <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
                  <u className="no-underline">LOGIN</u>
                </button>
              </Link>
            )}
          </div>
        </div>
      </>
    );
  } else if (props.showButton === "showSearch") {
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
          <Search showInlineSearchBar="show" />
          <div className="flex items-center">
            {isLoggedIn && (
              <Link to="/profile">
                <div className="h-10 rounded-full overflow-hidden border-2 border-blue-600">
                  <img src="./img/default.jpg" alt="" className="h-10" />
                </div>
              </Link>
            )}

            {isLoggedIn ? ( // Render the logout button if the user is logged in
              <button
                className="bg-red-500 p-2 text-white border-[1px] border-cyan-800 font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-red-800"
                onClick={handleLogout}
              >
                <u className="no-underline">LOGOUT</u>
              </button>
            ) : (
              // Render the login button if the user is not logged in
              <Link to="/login">
                <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
                  <u className="no-underline">LOGIN</u>
                </button>
              </Link>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="flex flex-row-reverse items-center sticky w-full bg-transparent top-0 duration-700 z-50"
          style={headerStyle}
        >
          {isLoggedIn ? ( // Render the logout button if the user is logged in
            <button
              className="bg-red-500 p-2 text-white border-[1px] border-cyan-800 font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-red-800"
              onClick={handleLogout}
            >
              <u className="no-underline">LOGOUT</u>
            </button>
          ) : (
            // Render the login button if the user is not logged in
            <Link to="/login">
              <button className="bg-sky-600 py-2 px-6 text-white font-semibold m-2 rounded-lg shadow-none hover:shadow-md hover:shadow-slate-400 active:bg-sky-800">
                <u className="no-underline">LOGIN</u>
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/profile">
              <div className="h-10 rounded-full overflow-hidden border-2 border-blue-600">
                <img src="./img/default.jpg" alt="" className="h-10" />
              </div>
            </Link>
          )}
        </div>
      </>
    );
  }
}
