import React, { useState } from "react";

export default function OTPVerify({ getMail, onData }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendDataToSignup = () => {
    onData(inputValue);
  };

  return (
    <>
      <div className="bg-green-200 p-4 mt-6 text-green-900">
        We have send a verification code to your email ID: {getMail}
      </div>
      <input
        className={`w-full mt-6 border-2 text-3xl smallPlaceholder no-arrows text-center font-mono tracking-widest border-gray-200 outline-gray-500 rounded-md p-2 bg-transparent`}
        type="number"
        placeholder="Enter Verification Code"
        required
        minLength={4}
        maxLength={4}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={sendDataToSignup}
        // signUp
        className="active:scale-[.98] active:duration-75 hover:scale-[1.01] w-full mt-6 ease-in-out transition-all py-2 rounded-xl bg-blue-950 text-white bg-sky-600 hover:bg-green-600 text-lg font-bold"
      >
        Submit
      </button>
    </>
  );
}
