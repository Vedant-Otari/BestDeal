import React from "react";

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
          <a href="#" className="cursor-pointer">
            <u>About</u>
          </a>
          <a href="#">
            <u>Privacy</u>
          </a>
          <a href="#">
            <u>Developers</u>
          </a>
        </div>
      </footer>
    </>
  );
}



function callMe(){
  alert("hiii")
}