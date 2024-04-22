"use client";

import React from "react";
import { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState<string>("login");
  const [deny, setDeny] = useState<Boolean>(false);
  const [sent, setSent] = useState<Boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailLogin, setEmailLogin] = useState<string>("");

  const verifyEmail = (email: string) => {
    const regex = /@gmail\.com$/;
    if (regex.test(email)) {
      if(deny) setDeny(false);
      setSent(true);
      return;
    }
    setDeny(true);
    setTimeout(() => {
      setDeny(false);
    }, 3000);
  }
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
            <button className="bg-[#006FEE] text-white text-center p-2 rounded-md w-[10rem] shadow-lg font-joseph-sans">
              Login
            </button>
            <p
              className="text-[#006FEE] cursor-pointer font-joseph-sans"
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
              <p className="text-red-600 w-[30rem] text-center font-joseph-sans">
                An account with that email cannot be found. Please try a
                different email of contact customer service.
              </p>
            )}

            {sent && (
              <>
                <h1 className="text-3xl text-black font-bold font-joseph-sans">
                  Check your email!
                </h1>
                <p className="text-[#006FEE] mb-5 font-bold text-xl w-[40rem] text-center font-joseph-sans">
                  {"We’ve"} sent instructions for resetting your password to
                </p>
              </>
            )}
            <div className="flex flex-col items-center mb-4">
              <input
                type="text"
                className="p-2 text-black rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-1"
                placeholder="Email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <button
                className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg"
                onClick={(e) => sent ? setFormState("resetPassword") : verifyEmail(emailLogin)}
              >
                {sent ? "Login" : "RESET PASSWORD"}
              </button>
              {sent ? (
                <p className="text-[#006FEE] font-joseph-sans">
                  {"Didn’t"} get a email?
                  <br />
                  Check your Junk Mail folder; if you still {"don’t"} have any
                  luck,
                  <br />
                  <span className="font-semibold font-joseph-sans">
                    contact customer service.
                  </span>
                </p>
              ) : (
                <p
                  className="text-[#006FEE] cursor-pointer font-joseph-sans"
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
              <button className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg font-joseph-sans" onClick={e => setFormState("success")}>
                Save
              </button>
            </div>
          </div>
        </>
      )}

      {formState === "success" && (
        <>
          <h1 className="text-5xl text-black font-bold text-center font-joseph-sans">Success!</h1>
          <p className="text-[#006FEE] mb-5 font-bold text-xl w-[40rem] text-center font-joseph-sans">
            Your pasword has been sucessfully reset. 
          </p>

          <div className="flex flex-col items-center text-center">
            <button className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg font-joseph-sans" onClick={e => setFormState("login")}>
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
