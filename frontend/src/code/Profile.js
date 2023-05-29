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

function getInitialLetters(word) {
  const words = word.split(" ");
  const initials = words.map((w) => w.charAt(0).toUpperCase());
  return initials.join("");
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
    if (res1.wishlist) {
      for (let i = 0; i < res1.wishlist.length; i++) {
        wishlist.push(
          <div key={i} className="text-left p-5 bg-zinc-100 hover:scale-105 duration-300 shadow-md m-4 rounded-xl">
            {removeBracket(res1.wishlist[i].product_name)}
          </div>
        );
      }
    }
    if (res1.comments) {
      for (let i = 0; i < res1.comments.length; i++) {
        comments.push(
          <div key={i} className="text-left p-5 bg-zinc-100 hover:scale-105 duration-300 shadow-md m-4 rounded-xl">
            <label className="text-black">Name: </label>
            {removeBracket(res1.comments[i].product_name)}
            <br />
            <label className="text-black">Comment: </label>
            "{res1.comments[i].description}"
            <br />
            <label className="text-black">Rating: </label>
            {res1.comments[i].rating}
          </div>
        );
      }
    }
  }

  function removeBracket(str) {
    const index = str.indexOf("("); // Find the index of the opening bracket '('

    if (index !== -1) {
      // If the opening bracket is found
      return str.substring(0, index); // Return the substring from the start of the string till the opening bracket
    }

    return str; // If no opening bracket is found, return the original string
  }

  return (
    <>
      <Header showButton="show" />
      <div className="text-6xl w-5/6 shadow-xl border-2 border-blue-900 shadow-gray-600 rounded-xl overflow-hidden mx-auto mt-8 text-center mb-20 p-9 bg-sky-700 text-white">
        <div className="bg-sky-200 border-black border-2 pt-10 rounded-xl shadow-inner shadow-black">
          <div className="bg-white shadow-lg shadow-sky-900 border-rose-800 text-blue-800 rounded-full aspect-square inline-block p-6 border-4 ">
            {res1 && getInitialLetters(res1.username)}
          </div>
          <div className="text-center shadow-inner w-11/12 mx-auto rounded-lg shadow-black bg-sky-600 py-3 mt-10">
            <div className="pt-3 capitalize">{res1 ? res1.username : " - "}</div>
            <div className="text-2xl mt-3 italic">
              {res1 ? res1.email_id : " - "}
            </div>
            <div className="flex mb-7 justify-around w-1/3 mt-6 mx-auto">
              <div className="flex flex-col">
                <div>{wishlist.length > 0 && wishlist.length}</div>
                <div className="text-xl">Wishlist</div>
              </div>
              <div className="text-6xl font-extralight">|</div>
              <div className="flex flex-col">
                <div>{comments.length > 0 && comments.length}</div>
                <div className="text-xl">Comments</div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10">
              <label className="text-4xl text-black">Your wishlist</label>
              <div className="w-3/4 mx-auto text-cyan-900 text-2xl rounded-xl mt-7 mb-14 leading-10">
                {wishlist}
              </div>
              <label className="text-4xl text-black">Your comments</label>
              <div className="w-3/4 mx-auto text-cyan-900 text-2xl rounded-xl mt-7 mb-14 leading-10">
                {comments}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
