"use client";
import React, { useState } from 'react'
import CreateAccount from './Create/CreateAccount'
import VerifyEmail from './Create/VerifyEmail';

const Create = () => {
  const [ formState, setFormState ] = useState<string>("createAccount")
  return (
    <>
      {
        formState === "createAccount" && <CreateAccount setFormState={setFormState} />
      }
      {
        formState === "verify" && <VerifyEmail  />
      }
    </>
  )
}

export default Create