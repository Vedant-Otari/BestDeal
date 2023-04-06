import React from 'react'

export default function Search() {
return (
<>
  <div className="logo mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/3 mt-24">
    <img src="./2.png" alt="BestDeal" className="m-auto w-full px-12 duration-1000"/>
    <form action="" method="get"
      className="bg-transparent duration-700 flex mt-6 justify-center border hover:bg-white text-black hover:shadow-xl hover:shadow-sky-800 hover:border-blue-500 hover:border-transparent border-black rounded-full pl-0 overflow-hidden mx-2">
      <input type="text" className="px-3 indent-3 w-full bg-transparent focus:outline-0 font-medium text-lg" />
      <button><img src="./search.png" alt="Search" className="h-8 my-2 mr-4" /></button>
    </form>
  </div>
</>
)
}