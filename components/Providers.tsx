"use client";

import React from 'react'
import { AuthProvider } from "@/util/AuthContext";
import { Provider } from "react-redux";
import mainStore from "@/redux/main";


const Providers = ({ 
    children 
}: {
    children: React.ReactNode
}) => {
  return (
    <>
        <Provider store={mainStore}>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
    </>
  )
}

export default Providers