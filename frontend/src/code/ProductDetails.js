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

var productName = "";
export default function ProductDetails() {
  const searchQuery = new URLSearchParams(useLocation().search).get("query");
  productName = searchQuery;
  const [res, setRes] = useState(null);

  useEffect(() => {
    callProduct();
  }, []);

  async function callProduct() {
    const result = await callLinkProduct();
    setRes(result);
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
