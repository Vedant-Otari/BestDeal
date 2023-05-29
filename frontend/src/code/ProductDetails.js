import Header from "./Header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

async function callLinkProduct() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductFromDB", {
      params: {
        product_name: productName,
      },
    });
    // console.log(res.data[0][0]);
    return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkComment() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductComment", {
      params: {
        product_name: productName,
      },
    });
    // console.log(res.data[0]);
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkSentiment() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductSentiment", {
      params: {
        product_name: productName,
      },
    });
    console.log("Product sentimet:\n" + res.data);
    console.log(res.data);
    // return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkWordCloud() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductWordClouds", {
      params: {
        product_name: productName,
      },
    });
    console.log(res.data);
    // return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkChart() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/chart", {
      params: {
        product_name: productName,
      },
    });
    console.log("Here is chart:\n\n");
    console.log(res.data[0]);
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
}

var productName = "";
export default function ProductDetails() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");
  productName = searchQuery;
  const [res, setRes] = useState(null);
  const [res1, setRes1] = useState(null);
  const [res2, setRes2] = useState(null);
  const [res3, setRes3] = useState(null);
  const [res4, setRes4] = useState(null);

  useEffect(() => {
    callProduct();
    callComments();
    callSentiment();
<<<<<<< HEAD
    // callWordCloud();
    // callChart();
=======
    // callWordCloud();
    // callChart();
>>>>>>> ae843b4905189befea2db3bf6d4ebc5c6c8d7757
  }, []);

  async function callProduct() {
    const result = await callLinkProduct();
    setRes(result);
  }

  async function callComments() {
    const result = await callLinkComment();
    setRes1(result);
  }

  async function callSentiment() {
    const result = await callLinkSentiment();
    setRes2(result);
  }

  async function callWordCloud() {
    const result = await callLinkWordCloud();
    setRes3(result);
  }

  async function callChart() {
    console.log("Called:\n\n");
    const result = await callLinkChart();
    setRes4(result);
  }

  // const renderHTML = () => {
  //   return { __html: res4.data[0] };
  // };

  if (!res) {
    return (
      <>
        <Header showButton="showSearch" />
        <div className="text-center mt-4 text-3xl bg-cyan-700 py-5 text-white">
          Searching "<span className="font-bold">{productName}</span>"
          <div className="inline font-serif dotLoading">.....</div>
        </div>
        <div className="w-4/6 mt-11 m-auto py-3 h-full loadingAnimation border-gray-400 rounded-2xl overflow-hidden border-2 bg-white">
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
      </>
    );
  }

  function mouseDirection() {
    const imageElement = document.getElementById("productImage");
    imageElement.addEventListener("mousemove", handleMouseMove);
  }
  const widthVar = `${(5 - parseFloat(res.stars)) * 20}%`;
  let prevX = 0;
  let prevY = 0;
  function handleMouseMove(event) {
    const imageElement = document.getElementById("productImage");
    // Get the current mouse coordinates
    const currentX = event.clientX;
    const currentY = event.clientY;

    // Calculate the direction based on the change in mouse coordinates
    const deltaX = currentX - prevX;
    const deltaY = currentY - prevY;

    // Determine the direction based on deltaX and deltaY values
    let direction = "";

    if (deltaX > 0) {
      direction += "Right";
    } else if (deltaX < 0) {
      direction += "Left";
    }

    if (deltaY > 0) {
      direction += "Down";
    } else if (deltaY < 0) {
      direction += "Up";
    }

    switch (direction) {
      case "Up":
        imageElement.style.transformOrigin = "top";
        break;
      case "Down":
        imageElement.style.transformOrigin = "bottom";
        break;
      case "LeftDown":
        imageElement.style.transformOrigin = "bottom left";
        break;
      case "LeftUp":
        imageElement.style.transformOrigin = "top left";
        break;
      case "RightDown":
        imageElement.style.transformOrigin = "bottom right";
        break;
      case "RightUp":
        imageElement.style.transformOrigin = "top right";
        break;

      default:
        break;
    }

    // Update the previous mouse coordinates
    prevX = currentX;
    prevY = currentY;
  }

  const productComments = [];
  if (res1) {
    for (let i = 0; i < res1.length; i++) {
      productComments.push(
        <div
          key={i}
          className="bg-zinc-100 px-10 rounded-lg p-4 my-3 hover:scale-[1.02] duration-300 shadow-md shadow-black"
        >
          <div className="text-lg">"{res1[i].comments[0].description}"</div>
          <div
            className={`text-lg font-bold ${
              res1[i].comments[0].rating > 3
                ? "text-green-600"
                : res1[i].comments[0].rating < 3
                ? "text-red-600"
                : "text-yellow-500"
              // res1[i].comments[0].rating > 3 ? "text-green-600" : "text-red-500"
            }`}
          >
            Ratings: {res1[i].comments[0].rating} / 5
          </div>
        </div>
      );
    }
  }

  // const renderHTML = () => {
  //   if (res4) {
  //     const htmlContent = res4;
  //     return { __html: htmlContent };
  //   }
  // };

  const renderHTML = () => {
    const element = document.createElement("chartCode");
    element.src = { res4 };
    // element.async = true

    return element;
  };
  return (
    <>
      <Header showButton="showSearch" />
      <div className="flex flex-col overflow-hidden border-2 border-cyan-700 w-5/6 m-auto mt-9 mb-10 rounded-xl">
        <div className="flex">
          <div className="p-2 w-1/2 bg-white flex origin justify-center aspect-[1.5] overflow-hidden">
            {res.image && (
              <img
                src={res.image}
                alt=""
                id="productImage"
                onMouseEnter={mouseDirection}
                className="object-contain cursor-zoom-in hover:scale-[1.6] duration-700"
              />
            )}
          </div>
          <div className="bg-zinc-200 w-1/2 flex p-7 flex-col">
            <label className="text-center shadow-md shadow-gray-500 rounded-t-xl text-3xl bg-cyan-700 text-white py-4 px-2 font-serif">
              {productName}
            </label>
            <div className="border-cyan-900 shadow-xl border-l-[55px] rounded-b-3xl pl-6 text-left flex flex-col justify-evenly h-full mt-0">
              <div className="text-3xl font-bold text-left w-full">
                Rs. {res.price}&nbsp;
                <span className="text-xl text-green-600 font-bold text-left">
                  ({parseFloat(res.discount).toFixed(2)}% off )
                </span>
              </div>
              <label className="text-xl w-fit diagonalStrikeThrough font-bold font-sans text-red-600">
                &#8377; {res.mrp}
              </label>
              <div>
                {res.website === "amazon" ? (
                  <img src="./amazon.jpg" alt="" className="h-4 mr-2 inline" />
                ) : (
                  <img
                    src="./flipkart.png"
                    alt=""
                    className="h-6 mr-2 inline"
                  />
                )}
                `
                {/* <img src="./flipkart.png" alt="" className="h-6 mr-2 inline" /> */}
                <a
                  href={res.link}
                  className="text-blue-800 text-left z-10 underline italic hover:text-voilet-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for website
                </a>
              </div>
              {/* <div id="abcd" className="text-xl font-bold text-yellow-600">
                Ratings - {res.ratings}
              </div> */}
              {res && res.ratings && (
                <div id="abcd" className="text-xl font-bold text-sky-800">
                  Ratings - {res.ratings}
                </div>
              )}
              {res && res.stars && (
                <div>
                  <div className="flex">
                    <span className="font-bold text-blue-800 text-xl mr-2">
                      {res.stars}
                    </span>
                    <div className="relative w-fit m-0">
                      <div
                        className="h-full absolute bg-zinc-200 right-0"
                        style={{ width: widthVar }}
                      >
                        &nbsp;
                      </div>
                      <div className="flex">
                        <svg
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.928 6.18L19 7.22l-5 4.865 1.165 6.813L10 15.71 4.835 19.897 6 13.03l-5-4.866L7.072 7.18 10 1z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.928 6.18L19 7.22l-5 4.865 1.165 6.813L10 15.71 4.835 19.897 6 13.03l-5-4.866L7.072 7.18 10 1z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.928 6.18L19 7.22l-5 4.865 1.165 6.813L10 15.71 4.835 19.897 6 13.03l-5-4.866L7.072 7.18 10 1z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.928 6.18L19 7.22l-5 4.865 1.165 6.813L10 15.71 4.835 19.897 6 13.03l-5-4.866L7.072 7.18 10 1z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-yellow-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.928 6.18L19 7.22l-5 4.865 1.165 6.813L10 15.71 4.835 19.897 6 13.03l-5-4.866L7.072 7.18 10 1z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* {res4 && <div dangerouslySetInnerHTML={renderHTML()} />} */}
        {res4 && <div>{renderHTML()} </div>}

        {res1 && res1.length > 0 && (
          <>
            <div className="bg-sky-700 p-5 pt-10">
              <div className="text-center text-white uppercase font-serif text-3xl">
                User comments
              </div>
              <div className="w-full p-5">{productComments}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
