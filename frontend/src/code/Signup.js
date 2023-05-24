import * as React from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");

  const signUp = async () => {
    console.log(username, email, password);
    if (password === confirm) {
      await axios
        .get("http://127.0.0.1:8000/api/signUp", {
          params: { username: username, email: email, password: password },
        })
        .then((res) => {
          console.log(res);
          var data = res.data[0];

          alert(data.msg);
          if (data.msg === "Account created succesfully") {
            console.log("redirect to login");
            window.location.href = "/login";
          }
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password dosent match");
    }
  };

  return (
    <>
      <Header showButton="show" />

      <div className="w-full flex flex-col items-center mt-16">
        <div className="bg-white px-10 mb-11 py-7 shadow-md rounded-xl border-2 border-gray-200 w-full max-w-md">
          <h1 className="text-3xl font-medium text-center text-blue-950 font-serif">
            Sign Up
          </h1>
          <div className="mt-7">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 mb-5 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent"
              type="email"
              placeholder="Enter Your email"
              onInput={(data) => setEmail(data.target.value)}
              required
              minLength={5}
              maxLength={50}
            />
            <label className="text-lg font-medium">User name</label>
            <input
              className="w-full border-2 mb-5 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent"
              type="User"
              placeholder="Enter Your User name"
              onInput={(data) => setUsername(data.target.value)}
              required
              minLength={5}
              maxLength={50}
            />
            <label className="text-lg font-medium">Password</label>
            <div className="flex items-center">
              <input
                className="w-full border-2 mb-5 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent"
                type="password"
                placeholder="Enter Your password"
                onInput={(data) => setPassword(data.target.value)}
                required
                minLength={8}
                maxLength={20}
              />
              {/* <img src="./a.png" alt="" srcset="" className="h-3" /> */}
            </div>
            <label className="text-lg font-medium">Confirm Password</label>
            <input
              className="w-full border-2 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent"
              type="password"
              placeholder="Re-Enter Your password"
              onInput={(data) => setConfirm(data.target.value)}
              required
              minLength={8}
              maxLength={20}
            />

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={signUp}
                className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-950 text-white bg-green-600 text-lg font-bold"
              >
                Sign up
              </button>
            </div>

            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Already have an account?</p>
              <Link to="/login">
                <button className="text-blue-400 font-medium ml-2">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
