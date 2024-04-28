import { AuthContext } from '@/util/AuthContext';
import { userPool } from '@/util/UserPool';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
const VerifyEmail = () => {
  const router = useRouter();
  const { email, set } = useContext(AuthContext)
  const [isError, setIsError] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const [verificationCode, setVerificationCode] = useState<string>("");

  const [resendCodeMessage, setResendCodeMessage] = useState<string>("");

  const handleVerify = (e: any) => {
    e.preventDefault();

    var userData = {
      Username: email,
      Pool: userPool,
    };
    
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(verificationCode, true, function (err, result) {
      if (err) {
        setIsError(true);
        setError(err.message);
        setTimeout(() => {
          setIsError(false);
          setError("");
        }, 3000);
        return;
      }
      set("");
      router.push('/login');
      console.log('call result: ' + result);
    });
  };

  const resendCode = (e: any) => {
    e.preventDefault();

    var userData = {
      Username: email,
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
        setIsError(true);
        setError(err.message);
        setTimeout(() => {
          setIsError(false);
          setError("");
        }, 3000);
        return;
      }

      setResendCodeMessage("Code resent successfully");
      setTimeout(() => {
        setResendCodeMessage("");
      }, 4000);
    });
  }
  return (
    <div className="p-2 w-[40rem] flex flex-col justify-center items-center rounded-md">
      {isError && (
        <div className="text-red-500 p-2 font-joseph-sans">{error}</div>
      )}

      {
        resendCodeMessage && (
          <div className="text-blue-500 p-2 font-joseph-sans">{resendCodeMessage}</div>
        )
      }

      {/* Verification Code input */}
      <input
        type="text"
        className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem] mt-[3rem]"
        placeholder="Verification Code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />

      <button
        className="bg-blue-500 shadow-lg text-white w-[30%] h-[3rem] rounded-md mb-5"
        onClick={(e) => handleVerify(e)}
      >
        Verify Email
      </button>
      <span className="text-blue-500 font-joseph-sans cursor-pointer" onClick={e => resendCode(e)}>Resend Verification Link</span>
    </div>
  )
}

export default VerifyEmail