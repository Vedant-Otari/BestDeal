import React from "react";
import axios from "axios";
import { useState } from "react";
export default function CommentBox({ productName,productDetails, onClose }) {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  function commentSubmit() {
    alert(username1);
    callLinkFavAdd();
    onClose();
  }

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

  async function callLinkFavAdd() {
    const cookieValue = getCookieValue("bestdeal");
    try {
      await axios.get("http://127.0.0.1:8000/api/addProductComment", {
        params: {
          product_name: productName,
          description: username1,
          rating: username2,
          cookie: cookieValue,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="absolute top-0 flex items-center justify-center bg-opacity-50 bottom-0 right-0 left-0 bg-sky-700 z-50">
      <div className="bg-zinc-50 p-10 shadow-md shadow-black flex flex-col w-1/2 h-1/2 overflow-hidden justify-evenly rounded-xl relative">
        <div
          onClick={onClose}
          className="absolute cursor-pointer hover:shadow-md hover:shadow-gray-600 bg-red-600 px-5 py-2 top-0 text-white font-bold font-sans text-3xl right-0 rounded-bl-xl rounded-tr-xl hover:scale-105"
        >
          X
        </div>
        <div className="text-3xl text-center">
          Add a comment for "{productName}"
        </div>
        <input
          onInput={(data) => setUsername1(data.target.value)}
          className="border-2 border-black rounded-md w-2/3 mx-auto text-xl p-2"
          placeholder="Enter your comment here"
          type="text"
        />
        <input
          onInput={(data) => setUsername2(data.target.value)}
          className="border-2 border-black no-arrows rounded-md w-1/3 mx-auto text-center text-xl p-2"
          placeholder="Enter rating here"
          type="number"
        />
        <button
          onClick={commentSubmit}
          className="bg-green-500 text-white hover:scale-105 hover:bg-green-600 shadow-md hover:shadow-lg hover:shadow-gray-500 shadow-gray-600 font-bold text-2xl w-1/3 mx-auto rounded-xl py-4 "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
