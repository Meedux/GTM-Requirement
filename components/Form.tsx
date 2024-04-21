"use client";

import React from "react";
import { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState<String>("login");
  const [deny, setDeny] = useState<Boolean>(false);
  const [sent, setSent] = useState<Boolean>(false);
  return (
    <>
      {formState === "login" && (
        <>
          <div className="flex flex-col items-center mb-4">
            <input
              type="text"
              className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="Email"
            />
            <input
              type="password"
              className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-3"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <button className="bg-[#006FEE] text-white text-center p-2 rounded-md w-[10rem] shadow-lg">
              Login
            </button>
            <p
              className="text-[#006FEE] cursor-pointer"
              onClick={(e) => setFormState("forgotPassword")}
            >
              Forgot Password?
            </p>
          </div>
        </>
      )}

      {formState === "forgotPassword" && (
        <>
          <div className="flex flex-col items-center">
            {deny && (
              <p className="text-red-600 w-[30rem] text-center">
                An account with that email cannot be found. Please try a
                different email of contact customer service.
              </p>
            )}

            {sent && (
              <>
                <h1 className="text-3xl text-black font-bold">
                  Check your email!
                </h1>
                <p className="text-[#006FEE] mb-5 font-bold text-xl w-[40rem] text-center">
                  {"We’ve"} sent instructions for resetting your password to
                </p>
              </>
            )}
            <div className="flex flex-col items-center mb-4">
              <input
                type="text"
                className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-1"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <button
                className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg"
                onClick={(e) => sent ? setFormState("resetPassword") : setSent(true)}
              >
                {sent ? "Login" : "RESET PASSWORD"}
              </button>
              {sent ? (
                <p className="text-[#006FEE]">
                  {"Didn’t"} get a email?
                  <br />
                  Check your Junk Mail folder; if you still {"don’t"} have any
                  luck,
                  <br />
                  <span className="font-semibold">
                    contact customer service.
                  </span>
                </p>
              ) : (
                <p
                  className="text-[#006FEE] cursor-pointer"
                  onClick={(e) => setFormState("login")}
                >
                  Cancel
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {formState === "resetPassword" && (
        <>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <input
                type="password"
                className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
                placeholder="New Password"
              />
              <input
                type="password"
                className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-1"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <button className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg" onClick={e => setFormState("success")}>
                Save
              </button>
            </div>
          </div>
        </>
      )}

      {formState === "success" && (
        <>
          <h1 className="text-5xl text-black font-bold text-center">Success!</h1>
          <p className="text-[#006FEE] mb-5 font-bold text-xl w-[40rem] text-center">
            Your pasword has been sucessfully reset. 
          </p>

          <div className="flex flex-col items-center text-center">
            <button className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg" onClick={e => setFormState("login")}>
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
