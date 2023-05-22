import React from "react";
import Header from "./Header";
import axios from "axios";
import { useEffect } from "react";

export default function Profile() {
  // changes here---------------
  function getCookieValue(name) {
    const cookies = document.cookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [cookieName, cookieValue] = cookie.split("=");
  
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  
    return null;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    callLink2();
  });

  function callLink2() {
    const cookieValue = getCookieValue("bestdeal");
    //const cookies = document.cookie;
    console.log("cookie is = "+cookieValue)
    return axios
    .get("http://127.0.0.1:8000/api/customer_details", {
      params: {
        cookie: cookieValue,
      },
    })
      .then((res) => {
        console.log(res);
        //return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header showButton="show" />
      <div className="text-6xl w-5/6 rounded-xl overflow-hidden mx-auto mt-8 text-center mb-20 pt-7 bg-gray-800 text-white">
        Profile
        <div className="text-center py-8 mt-4 text-2xl bg-gray-600">
          Name: xyz
          <br />
          <br />
          <br />
          Email ID: abc@xyz.com
        <div className="pt-20">
          <hr />
          <br />
          <label className="text-4xl text-cyan-200">Your wishlist</label>
          <div className="w-3/4 mx-auto rounded-xl mt-7 leading-10 bg-slate-500">
            abdcefg <br />
            abdcefg <br />
            abdcefg <br />
            abdcefg <br />
            abdcefg <br />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
