import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-gray-800 text-white w-5/6 m-auto rounded-lg">
        <h1 className= "text-center font-mono text-5xl py-7">About</h1>
        <div className="flex flex-col">
          <div className="w-full">
            <img
              className="w-full h-60 object-cover m-auto"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
          <div className="w-full text-center self-center p-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
            nobis deleniti quis illum nemo possimus dolorem nihil, sit quia
            magnam eaque eius alias tenetur iste voluptatum. Voluptas ratione
            dolorum quae, adipisci molestiae enim. Officia delectus laboriosam
            ipsam facere similique.
          </div>
        </div>
      </div>
    </>
  );
}
