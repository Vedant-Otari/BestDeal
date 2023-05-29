import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

function checkIfUserIsLoggedIn() {
  const cookies = document.cookie;

  // Check if the desired cookie is present
  const isLoggedIn = cookies.includes("bestdeal");
  console.log(isLoggedIn);
  return isLoggedIn;
}

const showPass = () => {
  const a = document.getElementById("passwordVisibility");
  const b = document.getElementById("passHide");
  const c = document.getElementById("passShow");
  b.style.display = "none";
  c.style.display = "block";
  a.type = "text";
};

const hidePass = () => {
  const a = document.getElementById("passwordVisibility");
  const b = document.getElementById("passHide");
  const c = document.getElementById("passShow");
  b.style.display = "block";
  c.style.display = "none";
  a.type = "password";
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if the user is already logged in (e.g., by checking the presence of a specific cookie)
    console.log("username is =" + username);
    const isLoggedIn = checkIfUserIsLoggedIn(); // Replace with your own logic

    if (isLoggedIn) {
      window.location.href = "/"; // Redirect to the home page if the user is already logged in
    }

    const childElement = document.getElementById("passwordVisibility");
    const parentElement = childElement.parentNode;

    childElement.addEventListener('focus', function() {
      parentElement.classList.add('border', 'border-gray-400');
    });
    
    childElement.addEventListener('blur', function() {
      parentElement.classList.remove('border', 'border-gray-400');
    });
  });

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const signIn = async () => {
    console.log(username, password);
    await axios
      .get("http://127.0.0.1:8000/api/signIn", {
        params: { username: username, password: password },
      })
      .then((res) => {
        console.log(res);
        var data = res.data[0];

        alert(data.msg);
        if (data.msg === "Sign In successful") {
          const cookie_name = "bestdeal";
          setCookie(cookie_name, data.cookies, 7);
          console.log("redirect to bestdeal");
          window.location.href = "/";
        }

        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header showButton="show" />
      <div className="w-full flex flex-col items-center mt-6">
        <div className="bg-white px-10 py-7 shadow-md rounded-xl border-2 border-gray-200 w-full max-w-md">
          <h1 className="text-3xl font-medium text-center text-blue-950 font-serif">
            Login
          </h1>
          <div className="mt-7">
            <label className="text-base font-medium">Username</label>
            <input
              className="w-full border-2 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent"
              type="text"
              autoComplete="bestdealLoginUserName"
              placeholder="Enter Your username"
              onInput={(data) => setUsername(data.target.value)}
              required
              // minLength={5}
              // maxLength={50}
            />
          </div>
          <div className="mt-5">
            <label className="text-base font-medium">Password</label>
            <div className="w-full border-2 flex items-center border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent">
              <input
                id="passwordVisibility"
                type="password"
                autoComplete="bestdealLoginPassword"
                className="w-full outline-0 pr-2"
                placeholder="Enter Your password"
                onInput={(data) => setPassword(data.target.value)}
                required
                // minLength={8}
                // maxLength={20}
              />
              <img
                id="passShow"
                src="./passwordHide.png"
                alt=""
                onClick={hidePass}
                className="h-3 cursor-pointer hidden hover:opacity-80"
              />
              <img
                id="passHide"
                src="./passwordShow.png"
                alt=""
                onClick={showPass}
                className="h-5 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={signIn}
              className="active:scale-[.98] hover:bg-green-600 active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-md bg-blue-950 text-white bg-green-500 text-base font-bold"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <div className="flex justify-center items-center">
              <p className="font-medium text-base text-gray-900">
                Don't have an account?
              </p>

              <Link to="/signup">
                <button className="text-blue-500 font-medium ml-2">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
