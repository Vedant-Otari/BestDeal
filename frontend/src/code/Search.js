import React from 'react'
import App from '../App'

export default function Search() {
return (
<>
  <div className="logo mx-auto w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/3 mt-24">
    <img src="./2.png" alt="BestDeal" className="m-auto w-full px-12" />
    <form action="" method="get"
      className="bg-blue-100 flex mt-6 justify-center border hover:bg-gray-100 hover:border-blue-500 border-black rounded-full pl-0 overflow-hidden mx-2">
      <input type="text" className="w-full bg-transparent indent-5 focus:outline-0 font-medium text-gray-700 text-lg" />
      <button><img src="./search.png" alt="Search" className="h-8 my-2 mr-4" /></button>
    </form>
  </div>
</>
)
}
