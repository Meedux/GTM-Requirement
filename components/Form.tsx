"use client";

import React from "react";
import { useState } from "react";
import Login from "./Forms/Login";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import Success from "./Forms/Success";

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
      {formState === "login" && <Login setFormState={setFormState} />}

      {formState === "forgotPassword" && <ForgotPassword setFormState={setFormState} deny={deny} sent={sent} emailLogin={emailLogin} setEmailLogin={setEmailLogin} verifyEmail={verifyEmail} />}

      {formState === "resetPassword" && <ResetPassword setFormState={setFormState} />}

      {formState === "success" && <Success setFormState={setFormState} />}
    </>
  );
};

export default Form;
