import React, { useState, useEffect } from "react";
import QueueFormInput from "./Utils/QueueFormInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAccountToQueue } from "@/redux/retrieval/thunks";
import { AccountQueue } from "@/redux/util_types";

const QueueFormCard = () => {
  const retrieval = useAppSelector((state) => state.retrieval);
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const addAccount = async () => {
    if(retrieval.selectedFolder.name === "") {
      alert("Please select a folder first");
      return;
    }
    const account: AccountQueue = {
      firstName,
      lastName,
      email,
      folder: retrieval.selectedFolder.id,
      phone
    }

    try{
      await dispatch(addAccountToQueue(account));
    }catch(e: any){
      console.log(e)
    }
    

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }

  return (
    <div className="">
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[100%]">
        <header className="border-b border-gray-300 bg-[#F4F4F5] mb-4">
          <h1 className="px-4 py-2 text-[12px] sm:text-base text-start text-black font-bold font-joseph-sans">Enter Contact Information</h1>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col">
              <QueueFormInput
                placeholder="First Name"
                className="font-joseph-sans"
                value={firstName}
                setValue={setFirstName}
              />
            </div>
            <div className="flex flex-col">
              <QueueFormInput
                placeholder="Last Name"
                className="font-joseph-sans"
                value={lastName}
                setValue={setLastName}
              />

            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col">
              <QueueFormInput
                placeholder="Email" 
                className="font-joseph-sans" 
                value={email}
                setValue={setEmail}
                mb="0"
              />

              <div className="divider">OR</div>

              <QueueFormInput
                placeholder="Phone Number"
                className="font-joseph-sans"
                value={phone}
                setValue={setPhone}
              />
            </div>
            <div className="flex justify-center items-center">
              <button 
                className="bg-[#006FEE] text-white px-5 py-1 rounded-md h-10 text-[12px] md:text-base shadow-md font-joseph-sans"
                onClick={e => addAccount()}
              >
                Retrieve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueFormCard;
