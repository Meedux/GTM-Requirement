import React, { useState, useEffect } from "react";
import QueueFormInput from "./Utils/QueueFormInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addAccountToQueue } from "@/redux/retrieval/thunks";

const QueueFormCard = () => {
  const retrieval = useAppSelector((state) => state.retrieval);
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [utility, setUtility] = useState<string>("");
  const [zip, setZip] = useState<string>("");

  const addAccount = () => {
    if(retrieval.selectedFolder.name === "") {
      alert("Please select a folder first");
      return;
    }

    
    dispatch(
      addAccountToQueue({
        firstName,
        lastName,
        email,
        city,
        state,
        utility,
        zip,
        date: new Date().toISOString(),
        folder: retrieval.selectedFolder.name,
      })
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setState("");
    setUtility("");
    setZip("");
  }

  return (
    <div className="">
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[100%] p-3 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <QueueFormInput
              placeholder="First Name"
              className="font-joseph-sans"
              value={firstName}
              setValue={setFirstName}
            />

            <QueueFormInput
              placeholder="Email" 
              className="font-joseph-sans" 
              value={email}
              setValue={setEmail}
            />

            <div className="mb-7">
              <QueueFormInput
                placeholder="City (Optional)"
                width="w-[40%]"
                className="mr-3 font-joseph-sans"
                value={city}
                setValue={setCity}
              />

              <QueueFormInput
                placeholder="State (Optional)"
                width="w-1/2"
                className="font-joseph-sans"
                value={state}
                setValue={setState}
              />
            </div>

            <QueueFormInput
              placeholder="File Name"
              className="font-joseph-sans"
            />
          </div>
          <div className="flex flex-col">
            <QueueFormInput
              placeholder="Last Name"
              className="font-joseph-sans"
              value={lastName}
              setValue={setLastName}
            />

            <QueueFormInput
              placeholder="Utility Provider (Optional)"
              className="font-joseph-sans"
              value={utility}
              setValue={setUtility}
            />

            <QueueFormInput
              placeholder="Zip Code (Optional)"
              className="font-joseph-sans mb-[3rem]"
              value={zip}
              setValue={setZip}
            />

            <div className="flex items-center">
              <button 
                className="bg-black text-white px-2 py-1 rounded-md mr-2 shadow-md text-[12px] md:text-base font-joseph-sans"
                
              >
                Upload
              </button>
              <p className="text-[#006FEE] text-xs cursor-pointer font-joseph-sans">
                Format instructions
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end ">
          <button 
            className="bg-black text-white px-2 py-1 rounded-md text-[12px] md:text-base shadow-md font-joseph-sans"
            onClick={e => addAccount()}
          >
            Add to Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueFormCard;
