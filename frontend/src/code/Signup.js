import * as React from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import OTPVerify from "./OTPVerify";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [showOTPVerify, setShowOTPVerify] = useState(false);

  const handleClick = () => {
    const a = document.getElementById("OTPSendButton");
    a.style.display = "none";
    setShowOTPVerify(true);
  };

  const showPass1 = () => {
    const a = document.getElementById("passwordVisibility1");
    const b = document.getElementById("passHide1");
    const c = document.getElementById("passShow1");
    b.style.display = "none";
    c.style.display = "block";
    a.type = "text";
  };

  const hidePass1 = () => {
    const a = document.getElementById("passwordVisibility1");
    const b = document.getElementById("passHide1");
    const c = document.getElementById("passShow1");
    b.style.display = "block";
    c.style.display = "none";
    a.type = "password";
  };

  const showPass2 = () => {
    const a = document.getElementById("passwordVisibility2");
    const b = document.getElementById("passHide2");
    const c = document.getElementById("passShow2");
    b.style.display = "none";
    c.style.display = "block";
    a.type = "text";
  };

  const hidePass2 = () => {
    const a = document.getElementById("passwordVisibility2");
    const b = document.getElementById("passHide2");
    const c = document.getElementById("passShow2");
    b.style.display = "block";
    c.style.display = "none";
    a.type = "password";
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validateUsername = () => {
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const getOTP = (data) => {
    // Do something with the data received from ABCD component
    // alert("this is :" + data);
    setOTP(data);
    signUp();
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password should be at least 8 characters",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const validateConfirmPassword = () => {
    if (!confirm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirm: "Confirm password is required",
      }));
    } else if (password !== confirm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirm: "Passwords do not match",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirm: "" }));
    }
  };

  const sendVerificationCode = async () => {
    validateEmail();
    validateUsername();
    validatePassword();
    validateConfirmPassword();

    if (Object.values(errors).every((error) => !error)) {
      // console.log(username, password);
      await axios
        .get("http://127.0.0.1:8000/api/sendVerificationCode", {
          params: { email: email },
        })
        .then((res) => {
          // console.log(res);
          // var data = res.data[0];
          // return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const signUp = async () => {
    // All fields are valid, proceed with signup
    console.log(username, email, password);

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/signUp", {
        params: {
          username: username,
          password: password,
          email: email,
          OTP: OTP,
        },
      });
      console.log(response.data[0]);
      const data = response.data[0];
      if(data.msg==="OTP does Not match"){
        alert(data.msg+". Please try again");
      }
      else if (data.msg === "Account created succesfully") {
        alert(data.msg);
        console.log("Redirect to login");
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header showButton="show" />

      <div className="w-full flex flex-col mb-11 items-center mt-6">
        <div className="bg-white px-10 py-7 mb-11 shadow-md rounded-xl border-2 border-gray-200 w-full max-w-md">
          <h1 className="text-3xl font-medium text-center text-blue-950 font-serif">
            Sign Up
          </h1>
          <div className="mt-7">
            <label className="text-lg font-medium">Email</label>
            <input
              className={`w-full border-2 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter Your email"
              value={email}
              autoComplete="bestdealSignUpMail"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={validateEmail}
              required
              minLength={5}
              maxLength={50}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <div className="text-lg mt-5 font-medium">User name</div>
            <input
              className={`w-full border-2 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent ${
                errors.username ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter Your User name"
              value={username}
              autoComplete="bestdealLoginUserName"
              onChange={(event) => setUsername(event.target.value)}
              onBlur={validateUsername}
              required
              maxLength={50}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}

            <div className="text-lg mt-5 font-medium">Password</div>
            <div className="relative flex items-center">
              <input
                className={`w-full pr-10 border-2 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                id="passwordVisibility1"
                placeholder="Enter Your password"
                value={password}
                autoComplete="bestdealLoginPassword"
                onChange={(event) => setPassword(event.target.value)}
                onBlur={validatePassword}
                required
                minLength={8}
                maxLength={20}
              />
              <img
                id="passShow1"
                src="./passwordHide.png"
                alt=""
                onClick={hidePass1}
                className="h-3 absolute right-2 cursor-pointer hidden hover:opacity-80"
              />
              <img
                id="passHide1"
                src="./passwordShow.png"
                alt=""
                onClick={showPass1}
                className="h-5 absolute right-2 cursor-pointer hover:opacity-80"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <div className="text-lg mt-5 font-medium">Confirm Password</div>
            <div className="relative flex items-center">
              <input
                className={`w-full border-2 pr-10 border-gray-200 outline-gray-500 rounded-md p-2 mt-1 bg-transparent ${
                  errors.confirm ? "border-red-500" : ""
                }`}
                type="password"
                id="passwordVisibility2"
                placeholder="Re-Enter Your password"
                value={confirm}
                autoComplete="bestdealLoginPassword"
                onChange={(event) => setConfirm(event.target.value)}
                onBlur={validateConfirmPassword}
                required
                minLength={8}
                maxLength={20}
              />
              <img
                id="passShow2"
                src="./passwordHide.png"
                alt=""
                onClick={hidePass2}
                className="h-3 absolute right-2 cursor-pointer hidden hover:opacity-80"
              />
              <img
                id="passHide2"
                src="./passwordShow.png"
                alt=""
                onClick={showPass2}
                className="h-5 absolute right-2 cursor-pointer hover:opacity-80"
              />
            </div>
            {errors.confirm && <p className="text-red-500">{errors.confirm}</p>}

            <div className="mt-8 flex flex-col gap-y-4" id="OTPSendButton">
              <button
                // onClick={signUp}
                onClick={function () {
                  sendVerificationCode();
                  window.scrollTo(
                    0,
                    document.documentElement.scrollHeight ||
                      document.body.scrollHeight
                  );
                  handleClick();
                }}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-950 text-white bg-green-500 hover:bg-green-600 text-lg font-bold"
              >
                Send OTP
              </button>
            </div>
            {showOTPVerify && <OTPVerify getMail={email} onData={getOTP} />}

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
