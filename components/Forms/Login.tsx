import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "@/util/UserPool";

const Login = ({
  setFormState,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const onLogin = () => {
    if (email === "" && password === "") {
      setErrorEmail(true);
      setErrorPassword(true);
      setTimeout(() => {
        setErrorEmail(false);
        setErrorPassword(false);
      }, 3000);
      return;
    }

    if (email === "") {
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false);
      }, 3000);
      return;
    }

    if (password === "") {
      setErrorPassword(true);
      setTimeout(() => {
        setErrorPassword(false);
      }, 3000);
      return;
    }

    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("onSuccess:", result);
        router.push("/home");
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
        setError(err.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log("newPasswordRequired:", userAttributes, requiredAttributes);
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mb-4">
        {errorEmail && (
          <p className="text-red-500 font-joseph-sans">Email is required</p>
        )}
        {error && <p className="text-red-500 font-joseph-sans">{error}</p>}
        <input
          type="text"
          className="p-2 rounded-md w-[20rem] h-[3rem] text-black bg-[#E7F1FE] mb-[1rem]"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {errorPassword && (
          <p className="text-red-500 font-joseph-sans">Password is required</p>
        )}
        <input
          type="password"
          className="p-2 rounded-md w-[20rem] text-black h-[3rem] bg-[#E7F1FE] mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <button
          className="bg-[#006FEE] text-white text-center p-2 rounded-md w-[10rem] shadow-lg font-joseph-sans"
          onClick={(e) => onLogin()}
        >
          LOGIN
        </button>
        <p
          className="text-[#006FEE] cursor-pointer font-joseph-sans"
          onClick={(e) => setFormState("forgotPassword")}
        >
          Forgot Password?
        </p>
        <Link href="/create" legacyBehavior>
          <a className="text-[#006FEE] font-joseph-sans">Create Account</a>
        </Link>
      </div>
    </>
  );
};

export default Login;
