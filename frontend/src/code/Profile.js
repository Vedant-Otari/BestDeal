import Header from "./Header";
import axios from "axios";
import React, { useState, useEffect } from "react";

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

async function callLink2() {
  const cookieValue = getCookieValue("bestdeal");
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/customer_details", {
      params: {
        cookie: cookieValue,
        // cookie: "b'$2b$12$vK8haRM2PkT6kbVuKPKOsuhK3boEnFr6YY0hKs4iW4xxpsrjBPwuK'",
      },
    });
    console.log(res.data[0][0]);
    return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

export default function Profile() {
  const [res1, setRes1] = useState(null);
  const wishlist = [];
  const comments = [];

  useEffect(() => {
    window.scrollTo(0, 0);
    call1();
  }, []);

  async function call1() {
    const result1 = await callLink2();
    // console.log("---------------------\n"+result1);
    setRes1(result1);
  }

  if (res1) {
    if(res1.wishlist){
      for (let i = 0; i < res1.wishlist.length; i++) {
        wishlist.push(<div key={i}>{res1.wishlist[i].product_name}</div>);
      }
    }
    if(res1.comments){
      for (let i = 0; i < res1.comments.length; i++) {
        comments.push(
        <div key={i} className="text-xl p-4 text-left">
          <label className="text-black">Name:   </label>
           {res1.comments[i].product_name}<br/>
          <label className="text-black">Coments:   </label>
          {res1.comments[i].description}<br/>
          <label className="text-black">Rating:   </label>
          {res1.comments[i].rating}
        </div>);
      }
    }
  }

  return (
    <>
      <Header showButton="show" />
      <div className="text-6xl w-5/6 rounded-xl overflow-hidden mx-auto mt-8 text-center mb-20 pt-7 bg-gray-800 text-white">
        Profile
        <div className="text-center py-8 mt-4 text-2xl bg-gray-600">
          Name: {res1 ? res1.username : " - "}
          <br />
          <br />
          <br />
          Email ID: {res1 ? res1.email_id : " - "}
          <div className="pt-20">
            <hr />
            <br />
            <label className="text-4xl text-cyan-200">Your wishlist</label>
            <div className="w-3/4 mx-auto rounded-xl mt-7 mb-14 leading-10 bg-slate-500">
              {wishlist}
            </div>
            <label className="text-4xl text-cyan-200">Comments</label>
            <div className="w-3/4 mx-auto rounded-xl mt-7 leading-10 bg-slate-500">
              {comments}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
