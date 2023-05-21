import * as React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

function checkIfUserIsLoggedIn() {
  const cookies = document.cookie;
  
  // Check if the desired cookie is present
  const isLoggedIn = cookies.includes('bestdeal');
console.log(isLoggedIn)
  return isLoggedIn;
}


export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  

  useEffect(() => {
    // Check if the user is already logged in (e.g., by checking the presence of a specific cookie)
    console.log("username is =" + username)
    const isLoggedIn = checkIfUserIsLoggedIn(); // Replace with your own logic

    if (isLoggedIn) {
      window.location.href = '/';  // Redirect to the home page if the user is already logged in
    }
  });

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const signIn = async () => {
    
    console.log(username, password);
    await axios.get('http://127.0.0.1:8000/api/signIn',{params : {"username": username,"password": password}})
    .then((res) => {
      console.log(res)
      var data = res.data[0];
      const cookie_name = "bestdeal";
      setCookie(cookie_name, data.cookies, 7);
      alert(data.msg);
      if(data.msg ==="Sign In successful"){
        console.log("redirect to bestdeal");
        window.location.href = '/';
      }
     
      return res.data;

    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
    <Header showButton="show"/>
    <div className="w-full flex flex-col items-center mt-10">
      <div className="bg-white px-10 py-7 rounded-3xl border-2 border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-semibold font-Libre_Baskerville text-blue-950">
          LOGIN
        </h1>
        <p className="font-medium text-base text-blue-950 mt-4 mb-4">
          Welcome.... <br /> Please enter your details
        </p>
        {/* <form className="w-full"> */}
          <div>
            <label className="text-base font-medium">Username</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              type="text"
              placeholder="Enter Your username"
              onInput={(data) => setUsername(data.target.value)}
              required
              minLength={5}
              maxLength={50}
            />
          </div>
          <div>
            <label className="text-base font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
              type="password"
              placeholder="Enter Your password"
              onInput={(data) => setPassword(data.target.value)}
              required
              minLength={8}
              maxLength={20}
            />
          </div>
          {/* <div className="mt-6">
            <button className="text-sm text-blue-400">Forgot Password</button>
          </div> */}
          <div className="mt-8 flex flex-col gap-y-4">
            <button onClick={signIn} className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-950 text-white bg-green-500 text-base font-bold">
              LOGIN
            </button>
          </div>
        {/* </form> */}
        <div className="mt-8 flex flex-col gap-y-4">
          <div className="flex justify-center items-center">
            <p className="font-medium text-base">Don't have an account?</p>
            
            
            <Link to="/signup">
              <button className="text-blue-400 font-medium ml-2">Sign In</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
