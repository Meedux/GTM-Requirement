"use client";

import React, { useState } from "react";
import UtilityProvider from "./Authorization/UtilityProvider";
import SignInForm from "./Authorization/SignInForm";
import TermsConditions from "./Authorization/TermsConditions";
import Success from "./Authorization/Success";

const Authorization = () => {
  const [formState, setFormState] = useState("utility");
  return (
    <>
      {formState === "utility" && (
        <UtilityProvider setFormState={setFormState} />
      )}
      {formState === "signin" && <SignInForm setFormState={setFormState} />}
      {formState === "terms" && <TermsConditions setFormState={setFormState} />}
      {formState === "success" && <Success />}
    </>
  );
};

export default Authorization;
