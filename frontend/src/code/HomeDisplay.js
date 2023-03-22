// import React from "react";
import React, { useState, useEffect } from "react"; 
function abcd() {
  alert("JOOOOOOooooo");
}

export default function HomeDisplay() {
  const helloArr = [];
  // let image = "https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg";



  const [image, setImage] = useState("");

  async function getImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/");
    const data = await response.json();
    setImage(data.message);
  }

  useEffect(() => {
    getImage();
  }, []);




  for (let i = 0; i < 100; i++) {
    helloArr.push(
      <div
        key={i}
        onClick={abcd}
        className="flex flex-col cursor-pointer bg-white border-blue-800 border-2 m-2 rounded-3xl aspect-[0.6] min-w-[13rem] overflow-hidden"
      >
        <img
          className="w-full cursor-pointer aspect-square object-cover"
          src={image}
          alt="abdcefg"
        />
        <label className=" cursor-pointer">Name</label>
        <label className=" cursor-pointer">Price</label>
      </div>
    );
  }
  return (
    <div className="p-6 text-center">
      <label className="text-2xl">People also searched</label>
      <div className="flex overflow-x-auto w-full">{helloArr}</div>
    </div>
  );
}
