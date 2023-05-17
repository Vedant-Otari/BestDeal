import React, { useState } from "react";

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/result?query=${searchQuery}`;
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  if (props.showInlineSearchBar === "show") {
    return (
      <>
        <div className="pt-2 w-80">
        {/* <div className="logo mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/3 mt-24 mb-24"> */}
          <form
            onSubmit={handleSearchSubmit}
            className="bg-slate-100 h-10 duration-200 font-serif flex justify-center border hover:bg-white text-black hover:shadow-md hover:shadow-gray-400 hover:border-blue-200 border-black rounded-full overflow-hidden mx-2"
          >
            <input
              type="text"
              className="px-3 indent-3 w-full bg-transparent focus:outline-0 font-medium text-lg"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="submit">
              <img
                src="./search.png"
                alt="Search"
                className="h-6 my-2 mr-4 outline-0 border-0"
              />
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="logo mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/3 mt-24 mb-24">
          <img
            src="./2.png"
            alt="BestDeal"
            className="m-auto w-full px-12 duration-1000"
          />
          <form
            onSubmit={handleSearchSubmit}
            className="bg-slate-100 duration-200 font-serif flex mt-6 justify-center border hover:bg-white text-black hover:shadow-md hover:shadow-gray-400 hover:border-blue-200 border-black rounded-full pl-0 overflow-hidden mx-2"
          >
            <input
              type="text"
              className="px-3 indent-3 w-full bg-transparent focus:outline-0 font-medium text-lg"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="submit">
              <img
                src="./search.png"
                alt="Search"
                className="h-8 my-2 mr-4 outline-0 border-0"
              />
            </button>
          </form>
        </div>
      </>
    );
  }
}
