import React from 'react'

export default function OTPVerify(props) {
  return (
    <>
        {/* <div className="bg-white px-10 py-7 mb-11 shadow-md rounded-xl border-2 border-gray-200 w-full max-w-md"> */}
            {/* <h1 className="text-3xl font-medium text-center text-blue-950 font-serif">
                OTP Verification
            </h1> */}
            <div className='bg-green-200 p-4 mt-6 text-green-900'> 
              We have send a verification code to your email ID:
            </div>
            <input
              className={`w-full mt-6 border-2 border-gray-200 outline-gray-500 rounded-md p-2 bg-transparent`}
              type="number"
              placeholder="Enter Verification Code"
              required
              minLength={4}
              maxLength={4}
            />
            <button
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] w-full mt-6 ease-in-out transition-all py-2 rounded-xl bg-blue-950 text-white bg-sky-600 hover:bg-green-600 text-lg font-bold"
              >
                Submit
              </button>
        {/* </div> */}
    </>
  )
}
