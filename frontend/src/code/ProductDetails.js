import Header from './Header';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

async function callLinkProduct() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductFromDB", {
      params: {
        product_name: productName
      }
    });
    console.log(res);
    return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkComment() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductComment", {
      params: {
        product_name: productName
      }
    });
    console.log(res);
    // return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkSentiment() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductSentiment", {
      params: {
        product_name: productName
      }
    });
    console.log(res);
    // return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkWordCloud() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/ProductWordClouds", {
      params: {
        product_name: productName
      }
    });
    console.log(res);
    // return res.data[0][0];
  } catch (err) {
    console.log(err);
  }
}

async function callLinkChart() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/chart", {
      params: {
        product_name: productName
      }
    });
    console.log(res);
    // return res.data[0][0];
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
    callWordCloud();
    callChart();
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
    const result = await callLinkChart();
    setRes4(result);
  }

  if (!res) {
    return (
      <>
      <Header showButton="showSearch" />
      Loading...
      </>
    )
  }

  return (
    <>
    <Header showButton="showSearch" />
      <div className='flex overflow-hidden border-2 border-cyan-700 w-5/6 m-auto mt-9 mb-10 rounded-xl'>
        <div className='w-1/2 p-6'>
          <img src={res.image} alt="" />
          {/* <img src="./img/default.jpg" alt="" srcset="" /> */}
        </div>
        <div className='bg-zinc-200 w-1/2 flex p-7 flex-col'>
          <label className="text-center rounded-xl text-3xl bg-cyan-700 text-white py-2 font-serif">{productName}</label>
          <div className='text-center mt-4'>
              <div>Price - {res.price}</div>
              <div>{parseFloat(res.discount).toFixed(2)}% off</div>
              <div>MRP - {res.mrp}</div>
          </div>
        </div>
      </div>
    </>
  )
}
