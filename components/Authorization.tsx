"use client";

import React, { useState } from "react";
import UtilityProvider from "./Authorization/UtilityProvider";
import SignInForm from "./Authorization/SignInForm";
import Processing from "./Authorization/Processing";
import Success from "./Authorization/Success";
import VerifyEmail from "./Authorization/VerifyEmail";

const Authorization = () => {
  const [formState, setFormState] = useState("utility");
  const [utility, setUtility] = useState("");
  const [utilityUserName, setUtilityUserName] = useState("");
  const [utilityPassword, setUtilityPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const authorize = async () => {

  }

  return (
    <>
      {formState === "utility" && (
        <UtilityProvider setFormState={setFormState} />
      )}
      {formState === "authorize" && (
        <SignInForm
          setFormState={setFormState}
          utility={utility}
          setUtility={setUtility}
          utilityUserName={utilityUserName}
          setUtilityUserName={setUtilityUserName}
          utilityPassword={utilityPassword}
          setUtilityPassword={setUtilityPassword}
        />
      )}
      {formState === "processing" && <Processing setFormState={setFormState} />}
    </>
  );
};

export default Authorization;
