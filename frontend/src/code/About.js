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
      <div className="bg-gray-800 text-white w-5/6 m-auto rounded-lg">
        <h1 className="text-center font-mono text-5xl py-7">About</h1>
        <div className="flex flex-col">
          <div className="w-full">
            <img
              className="w-full h-60 object-cover m-auto"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div className="w-full text-center self-center p-7">
          Welcome to BestDeal, your one-stop-shop for finding the best deals
            on any product you're searching for. Our team of four developers has
            worked tirelessly to create a user-friendly search engine that
            scours the web for the lowest prices on a wide range of products.
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white w-5/6 m-auto rounded-lg mt-10 overflow-hidden">
        <div className="flex flex-col">
          <div className="w-full">
            <img
              className="w-full p-16 object-contain m-auto"
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div className="w-full text-center self-center p-7">
            
            Our mission is simple: to help you save money while getting the
            products you need. With BestDeal, you don't have to waste hours
            browsing different shopping websites, comparing prices and features.
            Our search engine does the work for you, and within seconds, you'll
            have a list of options to choose from, including the cheapest price
            available. At BestDeal, we use advanced scraping technology to pull
            product details and pricing information from multiple online
            shopping websites. This ensures that you get the most up-to-date and
            accurate information possible. We constantly monitor our database to
            make sure that the information we provide is reliable and
            trustworthy. Our team is passionate about helping people save money
            while getting the products they need. We believe that everyone
            deserves to get the best deal possible, and we're committed to
            making that happen. If you have any questions or feedback, please
            don't hesitate to contact us. We're always looking for ways to
            improve our service and make it even better for our users. Thank you
            for choosing BestDeal, and happy shopping!
          </div>
        </div>
      </div>
    </>
  );
}
