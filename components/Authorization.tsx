"use client";

import React, { useEffect, useState } from "react";
import UtilityProvider from "./Authorization/UtilityProvider";
import SignInForm from "./Authorization/SignInForm";
import Processing from "./Authorization/Processing";
import Success from "./Authorization/Success";
import VerifyEmail from "./Authorization/VerifyEmail";
import { redirect, useSearchParams } from "next/navigation";
import Callback from "./Authorization/Callback";

const Authorization = () => {
  const [formState, setFormState] = useState("utility");
  const [utility, setUtility] = useState("");
  const [utilityUserName, setUtilityUserName] = useState("");
  const [utilityPassword, setUtilityPassword] = useState("");
  const [code, setCode] = useState<string | null>(null);
  const params = useSearchParams(); 
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (params.get("code")) {
      setFormState("processing");
      setCode(params.get("code"));
      setEmail(localStorage.getItem("email") || "");
    }else if(params.get("email")){
      setEmail(atob(params.get("email") || ""));
      localStorage.setItem("email", atob(params.get("email") || ""));
    }else{
      redirect("/login");
    }
  }, []);

  return (
    <>
      {formState === "utility" && (
        <UtilityProvider 
          setFormState={setFormState} 
          email={email}
          setEmail={setEmail}
        />
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
          email={email}
          setEmail={setEmail}
        />
      )}
      {formState === "processing" && <Processing 
          setFormState={setFormState} 
          code={code} 
          utility={utility} 
          email={email}
          />}

      {formState === "success" && <Success code={code} setCode={setCode} />}
    </>
  );
};

export default Authorization;
