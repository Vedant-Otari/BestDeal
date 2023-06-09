import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.js";

async function callLinkFlipkart() {
  try {
    const res1 = await axios.get(
      "http://127.0.0.1:8000/api/flipkart/" + productName
    );
    console.log(res1.data);
    return res1.data;
  } catch (err) {
    console.log(err);
  }
}

async function callLinkAmazon() {
  try {
    const res2 = await axios.get(
      "http://127.0.0.1:8000/api/amazon/" + productName
    );
    console.log(res2.data);
    return res2.data;
  } catch (err) {
    console.log(err);
  }
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

async function callLinkFavAdd(prodName) {
  const cookieValue = getCookieValue("bestdeal");
  try {
    await axios.get("http://127.0.0.1:8000/api/wishlistAdd", {
      params: {
        product_name: prodName,
        cookie: cookieValue,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

async function callLinkFavRemove(prodName) {
  const cookieValue = getCookieValue("bestdeal");
  try {
    await axios.get("http://127.0.0.1:8000/api/ProductSentiment", {
      params: {
        product_name: prodName,
        cookie: cookieValue,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

var productName = "";
export default function Result() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");
  productName = searchQuery;
  const handleSearchSubmit = (productName) => {
    window.location.href = `/productDetails?query=${productName}`;
  };

  const [emailNotification, setEmailNotification] = useState(true);

  const hideNotificationBox = () => {
    setEmailNotification(false);
  };

  const [resF, setResF] = useState(null);
  const [resA, setResA] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    callFlipkart();
    // callAmazon();

    const checkIfUserIsLoggedIn = () => {
      const cookies = document.cookie;
      const isLogged = cookies.includes("bestdeal");
      setIsLoggedIn(isLogged);
    };

    checkIfUserIsLoggedIn();
  }, []);

  const showFav = (name, id1, id2) => {
    callLinkFavAdd(name);
    if (resF || resA) {
      const b = document.getElementById(id1);
      const c = document.getElementById(id2);
      b.style.display = "none";
      c.style.display = "block";
    }
  };

  const hideFav = (name, id1, id2) => {
    callLinkFavRemove(name);
    if (resF || resA) {
      const b = document.getElementById(id1);
      const c = document.getElementById(id2);
      b.style.display = "none";
      c.style.display = "block";
    }
  };

  async function callFlipkart() {
    const result = await callLinkFlipkart();
    setResF(result);
  }

  async function callAmazon() {
    const result = await callLinkAmazon();
    setResA(result);
  }

  if (!resF && !resA) {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6 ">
            Searching for "{searchQuery}"
            <div className="inline font-serif dotLoading">.....</div>
          </h1>
          <div className="w-4/6  m-auto py-3 h-full loadingAnimation border-gray-400 rounded-2xl overflow-hidden border-2 bg-white">
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src="./img/defaultImage.jpg"
                alt=""
                className="h-60 aspect-square opacity-60 w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <label className="text-3xl bg-gray-400 h-10 rounded-l-xl w-full"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
              </div>
            </div>
            <div className="border-gray-400 border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src="./img/defaultImage.jpg"
                alt=""
                className="h-60 aspect-square opacity-60 w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-evenly pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                <label className="text-3xl bg-gray-400 h-10 rounded-l-xl w-full"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
                <label className="text-3xl bg-gray-400 h-5 rounded-xl w-1/2"></label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (!resA) {
    return (
      <>
        <Header showButton="showSearch" />
        {emailNotification && (
          <EmailNotification
            productName={productName}
            onClose={hideNotificationBox}
          />
        )}
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6">
            Search results for "{searchQuery}"
          </h1>
          <div className="w-4/6 m-auto py-3 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-slate-500 border-2 bg-white">
            <div className="border-gray-400 items-center border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resF.image}
                alt=""
                onClick={() => handleSearchSubmit(resF.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                {isLoggedIn && (
                  <div className="block w-full">
                    <img
                      src="./fav0.png"
                      alt="Favourite"
                      id="1fav0"
                      onClick={() => showFav(resF.name, "1fav0", "1fav1")}
                      className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                    <img
                      src="./fav1.png"
                      alt="Favourite"
                      id="1fav1"
                      onClick={() => hideFav(resF.name, "1fav1", "1fav0")}
                      className="h-4 hidden float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                  </div>
                )}
                <label
                  onClick={() => handleSearchSubmit(resF.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resF.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resF.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resF.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-700">
                    &#8377; {resF.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <img
                    src="./flipkart.png"
                    alt=""
                    className="h-6 mr-2 inline"
                  />
                  <a
                    href={resF.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="bg-gray-50 min-h-screen h-full pb-16">
          <h1 className="text-3xl text-center font-sans py-6">
            Search results for "{searchQuery}"
          </h1>
          <div className="w-4/6 m-auto py-3 border-gray-400 rounded-2xl overflow-hidden shadow-lg shadow-slate-500 border-2 bg-white">
            <div className="border-gray-400 items-center border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resF.image ? resF.image : null}
                alt=""
                onClick={() => handleSearchSubmit(resF.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                {isLoggedIn && (
                  <div className="block w-full">
                    <img
                      src="./fav0.png"
                      alt="Favourite"
                      id="2fav0"
                      onClick={() => showFav(resF.name, "2fav0", "2fav1")}
                      className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                    <img
                      src="./fav1.png"
                      alt="Favourite"
                      id="2fav1"
                      onClick={() => hideFav(resF.name, "2fav1", "2fav0")}
                      className="h-4 hidden float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                  </div>
                )}
                <label
                  onClick={() => handleSearchSubmit(resF.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resF.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resF.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resF.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-600">
                    &#8377; {resF.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <img
                    src="./flipkart.png"
                    alt=""
                    className="h-6 mr-2 inline"
                  />
                  <a
                    href={resF.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>

            <div className="border-gray-400 items-center border-y-[1px] hover:scale-[101%] duration-300 my-2 flex justify-evenly">
              <img
                src={resA.image}
                alt=""
                onClick={() => handleSearchSubmit(resA.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-60 aspect-square w-1/4 object-contain m-4 bg-white rounded-xl"
              />
              <div className="flex flex-col justify-start space-y-4 pl-6 bg-slate-200 items-start w-3/4 text-center py-5">
                {isLoggedIn && (
                  <div className="block w-full">
                    <img
                      src="./fav0.png"
                      alt="Favourite"
                      id="3fav0"
                      onClick={() => showFav(resA.name, "3fav0", "3fav1")}
                      className="h-4 float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                    <img
                      src="./fav1.png"
                      alt="Favourite"
                      id="3fav1"
                      onClick={() => hideFav(resA.name, "3fav1", "3fav0")}
                      className="h-4 hidden float-right pr-5 cursor-pointer active:scale-100 hover:scale-125"
                    />
                  </div>
                )}
                <label
                  onClick={() => handleSearchSubmit(resA.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-3xl p-1 pl-3 pr-3 bg-cyan-800 text-white w-full text-left"
                >
                  {resA.name}
                </label>
                <label className="text-2xl font-bold font-sans">
                  &#8377; {resA.price}&nbsp;
                  <label className="text-xl text-green-800">
                    ({parseFloat(resA.discount).toFixed(2)}% off)
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="text-2xl diagonalStrikeThrough font-bold font-sans text-red-700">
                    &#8377; {resA.mrp}
                  </label>
                </label>
                <label className="text-lg">
                  <img src="./amazon.jpg" alt="" className="h-4 mr-2 inline" />
                  <a
                    href={resA.link}
                    className="text-blue-800 z-10 underline italic hover:text-voilet-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here for website
                  </a>{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const EmailNotification = ({ productName, onClose }) => {
  const [emailNotification1, setEmailNotification1] = useState(false);
  const [emailNotification2, setEmailNotification2] = useState(true);

  const hideNotificationBox = () => {
    setEmailNotification1(true);
    setEmailNotification2(false);
  };

  return (
    <>
      <div className="bg-sky-900 bg-opacity-70 flex items-center justify-center absolute top-0 right-0 left-0 z-50 bottom-0">
        <div className="bg-zinc-50 justify-around overflow-hidden duration-300 py-10 w-1/2 h-1/2 relative flex flex-col rounded-3xl p-6 shadow-xl shadow-gray-900">
          <div
            onClick={onClose}
            className="absolute cursor-pointer bg-red-600 px-5 py-2 top-0 text-white font-bold font-sans text-3xl right-0 rounded-bl-xl rounded-tr-3xl hover:scale-105"
          >
            X
          </div>
          {emailNotification2 && (
            <>
              <div className="text-center text-3xl">
                Would you like to get mail for "{productName}"?
              </div>
              <div className="flex justify-evenly text-2xl mb-10 w-1/2 mx-auto">
                <button
                  onClick={hideNotificationBox}
                  className="bg-zinc-300 shadow-sm hover:shadow-md hover:shadow-gray-600 duration-200 shadow-black py-3 px-5 rounded-lg"
                >
                  YES
                </button>
                <button
                  onClick={onClose}
                  className="bg-zinc-300 shadow-sm hover:shadow-md hover:shadow-gray-600 duration-200 shadow-black py-3 px-5 rounded-lg"
                >
                  NO
                </button>
              </div>
            </>
          )}
          {emailNotification1 && (
            <>
              <div className="text-center text-3xl">
                We will mail you when {productName}'s price goes below:
              </div>
              <input type="number" className="border-2 text-xl p-2 no-arrows rounded-md shadow-md bg-zinc-100 border-black text-center w-1/3 mx-auto" placeholder="Enter price here"/>
              <button
                onClick={onClose}
                className="bg-green-500 font-bold hover:bg-green-600 mb-6 text-white text-xl w-1/3 mx-auto shadow-sm hover:shadow-md hover:shadow-gray-600 duration-200 shadow-black py-3 px-5 rounded-lg"
              >
                Submit
              </button>
              {/* <button
                onClick={onClose}
                className="bg-zinc-300 text-xl w-1/2 mx-auto shadow-sm hover:shadow-md hover:shadow-gray-600 duration-200 shadow-black py-3 px-5 rounded-lg"
              >
                I don't want to any mail.
              </button> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};
