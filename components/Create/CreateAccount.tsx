"use client";

import { AuthContext } from "@/util/AuthContext";
import { userPool } from "@/util/UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateAccount = ({
  setFormState,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { set } = useContext(AuthContext);
  const [isError, setIsError] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  // set the input states
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyPosition, setCompanyPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignIn = (e: any) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setIsError(true);
      setError("Emails do not match");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    if (password !== confirmPassword) {
      setIsError(true);
      setError("Passwords do not match");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    const emailAttribute = new CognitoUserAttribute({
      Name: "email",
      Value: email,
    });

    const firstNameAttribute = new CognitoUserAttribute({
      Name: "custom:First-name",
      Value: firstName,
    });

    const lastNameAttribute = new CognitoUserAttribute({
      Name: "custom:Last-Name",
      Value: lastName,
    });

    const companyNameAttribute = new CognitoUserAttribute({
      Name: "custom:Company-Name",
      Value: companyName,
    });

    const companyPositionAttribute = new CognitoUserAttribute({
      Name: "custom:Company-Position",
      Value: companyPosition,
    });

    const attributes = [
      emailAttribute,
      firstNameAttribute,
      lastNameAttribute,
      companyNameAttribute,
      companyPositionAttribute,
    ];

    userPool.signUp(email, password, attributes, null as any, (err, data) => {
      if (err) {
        setIsError(true);
        setError(err.message);
        setTimeout(() => {
          setIsError(false);
          setError("");
        }, 3000);
        return;
      }
      console.log(data);
      set(email);
      setFormState("verify");
    });
  };
  return (
    <div className=" p-2 w-[40rem] flex flex-col justify-center items-center rounded-md">
      {isError && (
        <div className="text-red-500 p-2 font-joseph-sans">{error}</div>
      )}
      <div className="grid grid-cols-2 gap-4 w-[60%] md:w-full">
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Company Name (optional)"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <input
            type="email"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Company Position"
            value={companyPosition}
            onChange={(e) => setCompanyPosition(e.target.value)}
          />

          <input
            type="email"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Confirm Email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />

          <input
            type="password"
            className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        className="bg-blue-500 shadow-lg text-white w-[30%] h-[3rem] rounded-md mb-1"
        onClick={(e) => handleSignIn(e)}
      >
        CREATE ACCOUNT
      </button>

      <span
        className="text-blue-500 font-joseph-sans cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          router.push("/login");
        }}
      >
        Already have an Account?
      </span>
    </div>
  );
};

export default CreateAccount;
