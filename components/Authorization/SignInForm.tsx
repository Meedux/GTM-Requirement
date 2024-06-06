import Image from "next/image";
import React, { useContext } from "react";
import { userPool } from "./../../util/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const SignInForm = ({
  setFormState,
  setUtility,
  utility,
  utilityUserName,
  setUtilityUserName,
  utilityPassword,
  setUtilityPassword,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  setUtility: React.Dispatch<React.SetStateAction<string>>;
  utility: string;
  utilityUserName: string;
  setUtilityUserName: React.Dispatch<React.SetStateAction<string>>;
  utilityPassword: string;
  setUtilityPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [error, setError] = React.useState<string>("");
  const [isError, setIsError] = React.useState<boolean>(false);
  return (
    <div className="h-screen mx-[10%] flex flex-col justify-center items-center">
      <Image
        src={"/CHORA-WHITE.svg"}
        className="mb-7"
        width={300}
        height={200}
        alt="Chora Logo"
      />

      {/* Sign In Card with white Background */}
      <div className="bg-white p-5 md:w-[50rem] flex flex-col justify-center items-center rounded-md shadow-2xl">
        {/* <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9 '/> */}
        <h1 className="text-black font-joseph-sans text-xl md:text-4xl mb-4 font-bold">
          Authorize Account
        </h1>

        {/* <div className="mb-3 p-3 border border-black rounded-md"></div> */}
        {isError && (
          <div className="text-red-500 p-2 font-joseph-sans">{error}</div>
        )}
        <div className="mb-7 w-full flex justify-center items-center flex-col">
          <div className="flex justify-between items-center mx-3 w-[90%] md:w-[70%] mb-[1rem]">
            <p className="text-black font-bold text-xs md:text-base">Customer Email</p>
            <input
              type="text"
              className="p-2 rounded-md w-[70%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mx-3 w-[90%] md:w-[70%] mb-[1rem]">
            <p className="text-black font-bold text-xs md:text-base">Select Your Utility</p>
            <select 
              className="select p-2 rounded-md w-[70%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE]"
              value={utility}
              onChange={(e) => setUtility(e.target.value)}
            >
              <option disabled value="">
                Choose Utility
              </option>
              <option value="PG&E">PG&E</option>
              <option value="SDGE">SDGE</option>
              <option value="SCE">SCE</option>
            </select>
          </div>
        </div>
        
        {
          utility != "" && (
            <div className="mb-4 w-full flex justify-center items-center flex-col">
              <div className="flex justify-between items-center mx-3 w-[90%] md:w-[70%] mb-[1rem]">
                <p className="text-black text-xs md:text-base font-bold">{utility} Username</p>
                <input
                  type="text"
                  className="p-2 rounded-md w-[70%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] input"
                  placeholder="Username"
                  value={utilityUserName}
                  onChange={(e) => setUtilityUserName(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mx-3 w-[90%] md:w-[70%] mb-[1rem]">
                <p className="text-black text-xs md:text-base font-bold">{utility} Password</p>
                <input
                  type="password"
                  className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] input"
                  placeholder="Password"
                  value={utilityPassword}
                  onChange={(e) => setUtilityPassword(e.target.value)}
                />
              </div>
            </div>
          )
        }

        <div className="mb-3 w-[90%] md:w-[60%] flex justify-center items-center flex-col">
          <p className="text-black font-joseph-sans text-xs md:text-base">
            {
              "I am the owner of the utility account(s) above, and in accordance with Chora’s Terms of Service and Privacy Policies, I authorize Chora Inc. to:"
            }
          </p>
        </div>

        <div className="mb-7 w-[90%] md:w-[60%] flex justify-center  flex-col">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="checkbox1" className="mr-2 checkbox  border-black" />
            <label htmlFor="checkbox1" className="text-black font-joseph-sans text-xs md:text-base">
              Login to above accounts on my behalf
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="checkbox2" className="mr-2 checkbox  border-black" />
            <label htmlFor="checkbox2" className="text-black font-joseph-sans text-xs md:text-base">
              Collect all account data
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="checkbox3" className="mr-2 checkbox  border-black" />
            <label htmlFor="checkbox3" className="text-black font-joseph-sans text-xs md:text-base">
              Authorize and share data on my behalf
            </label>
          </div>
        </div>

        <button className="bg-black text-xs md:text-base text-white w-[70%] md:w-[40%] h-[3rem] rounded-md mb-5" onClick={e => setFormState("processing")}>
          AUTHORIZE {utility} ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
