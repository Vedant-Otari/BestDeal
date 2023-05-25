import React from "react";
import Header from "./Header";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header showButton="show" />

      <div className="mb-10 bg-gray-800 text-center text-white w-5/6 m-auto rounded-2xl overflow-hidden mt-10 shadow-2xl shadow-black">
        <div className="h-60 bg-transparent relative">
          <h1 className="text-7xl mb-4 absolute z-10 text-center w-full h-full flex justify-center items-center font-bold">
            About Us
          </h1>
          <img
            className="w-full h-full object-cover opacity-40 absolute rounded-t-2xl"
            src="./img/aboutBG.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
          <img src="./logo512.png" alt="" className="w-1/3 aspect-square p-12" />
          <div className="text-white font-serif h-full font-semibold px-10 text-xl text-left leading-loose">
            <label className="text-3xl">What is BestDeal?</label>
            <hr /><br /> Your one-stop-shop for finding the best deals
            on any product you're searching for. Our team of four developers has
            worked tirelessly to create a user-friendly search engine that
            scours the web for the lowest prices on a wide range of products.
          </div>
        </div>
        <div className="flex shadow-inner shadow-black bg-gray-700 m-4 rounded-2xl">
          <div className="text-white font-seriffont-semibold text-2xl text-left p-10 leading-loose">
            Our mission is simple: to help you save money while getting the
            products you need. With BestDeal, you don't have to waste hours
            browsing different shopping websites, comparing prices and features.
             This ensures that you get the most up-to-date and
            accurate information possible. We constantly monitor our database to
            make sure that the information we provide is reliable and
            trustworthy.
          </div>
          <img src="./v2.png" alt="" className="w-1/12 aspect-square object-contain mr-7" />
        </div>
        <div className="flex bg-gray-800">
          <img src="./v1.png" alt="" className="w-1/12 aspect-square object-contain ml-8" />
          <div className="text-white font-serif flex font-semibold text-2xl text-left p-10 leading-loose">
          Our search engine does the work for you, and within seconds, you'll
            have a list of options to choose from, including the cheapest price
            available. At BestDeal, we use advanced scraping technology to pull
            product details and pricing information from multiple online
            shopping websites.
          </div>
        </div>
        <div className="flex shadow-inner shadow-black bg-gray-900 m-4 rounded-2xl">
          <div className="text-white font-serif flex font-semibold text-2xl text-left p-10 leading-loose">
          Our team is passionate about helping people save money
            while getting the products they need. We believe that everyone
            deserves to get the best deal possible, and we're committed to
            making that happen. If you have any questions or feedback, please
            don't hesitate to contact us. We're always looking for ways to
            improve our service and make it even better for our users.
            <br /> Thank you
            for choosing BestDeal, and happy shopping!
          </div>
          <img src="./v3.png" alt="" className="w-1/12 aspect-square object-contain mr-7" />
        </div>
      </div>
    </>
  );
}
