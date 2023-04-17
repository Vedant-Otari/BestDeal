import axios from 'axios';
import React, { useState, useEffect } from 'react';

function abcd(x) {
  alert('Clicked');
}

function callLink() {
  return axios
    .get('http://127.0.0.1:8000/api/recomendations')
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function HomeDisplay() {
  const helloArr = [];
  const [res, setRes] = useState(null);
  // let image = 'https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg';

  useEffect(() => {
    call();
  }, []);

  async function call() {
    const result = await callLink();
    setRes(result);
  }

  if (!res) {
    return <>
      <div className='justify-center flex text-4xl text-white pt-8'>
        Content is Loading...
      </div>
    </>;
  }

  for (let i = 0; i < 5; i++) {
    console.log(res);
    helloArr.push(
      <div
        key={i}
        onClick={abcd}
        className="hover:scale-105 duration-500 flex w-12 flex-col cursor-pointer bg-white border-blue-800 border-2 m-2 rounded-3xl aspect-[0.6] min-w-[13rem] overflow-hidden"
      >
        <img
          className="w-full cursor-pointer aspect-square object-contain p-2"
          src={res[i].image}
          alt="abdcefg"
        />
        <label className=" cursor-pointer">{res[i].name}</label>
        <label className=" cursor-pointer">Rs. {res[i].price}</label>
      </div>
    );
  }
  return (
    <div className="p-6 text-center mt-10">
      <label className="text-2xl font-bold font-serif">People also searched</label>
      <div className="flex w-full justify-center mt-10">{helloArr}</div>
    </div>
  );
}






























// // import React from "react";
// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// function abcd() {
//   alert("Clicked");
// }

// function callLink(){
//   return axios.get("http://127.0.0.1:8000/api/flipkart/samsungs22")
//         .then(res =>{
//             // console.log(res);
//             return res.data;
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// export default function HomeDisplay() {
//   const helloArr = [];
//   var res;
//   let image = "https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg";

//   useEffect( () => {
//     call();
//   }, []);
//   async function call(){
//     res = await callLink();
//     // console.log(res);
//   }

//   for (let i = 0; i < 5; i++) {
//     console.log(res);
//     helloArr.push(
//       <div
//         key={i}
//         onClick={abcd}
//         className="flex flex-col cursor-pointer bg-white border-blue-800 border-2 m-2 rounded-3xl aspect-[0.6] min-w-[13rem] overflow-hidden"
//       >
//         <img
//           className="w-full cursor-pointer aspect-square object-cover"
//           src={image}
//           alt="abdcefg"
//         />
//         <label className=" cursor-pointer">Name</label>
//         <label className=" cursor-pointer">Price</label>
//       </div>
//     );
//   }
//   return (
//     <div className="p-6 text-center">
//       <label className="text-2xl">People also searched</label>
//       <div className="flex overflow-x-auto w-full">{helloArr}</div>
//     </div>
//   );
// }
