import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  if (props.showButton === "show"){
    return (
      <>
        <div className="flex justify-between">
          <div className="ml-4">
          <Link to="/"><u className="hover:text-cyan-300">
            <img src="./2.png" alt="" className="h-10"/>
            </u></Link>
          </div>
          <button className="bg-sky-700 py-2 px-6 duration-300 text-white font-semibold m-2 rounded-lg hover:shadow-md hover:shadow-sky-900 hover:bg-sky-500 active:bg-sky-700 hover:font-bold">
            
          <Link to="/login"><u className="hover:text-cyan-300">LOGIN</u></Link>
          </button>
        </div>
      </>
    );
  }
  else{
    
  return (
    <>
      <div className="flex flex-row-reverse">
        <button className="bg-sky-700 py-2 px-6 duration-300 text-white font-semibold m-2 rounded-lg hover:shadow-md hover:shadow-sky-900 hover:bg-sky-500 active:bg-sky-700 hover:font-bold">
          
        <Link to="/login"><u className="hover:text-cyan-300">LOGIN</u></Link>
        </button>
      </div>
    </>
  );
}
}
