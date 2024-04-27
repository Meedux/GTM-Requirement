import React from "react";
import QueueFormInput from "./Utils/QueueFormInput";

const QueueFormCard = () => {
  return (
    <div className="">
      <div className="border border-gray-300 rounded-md shadow-lg card h-[100%] p-3 w-full ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <QueueFormInput
              placeholder="First Name"
              className="font-joseph-sans"
            />

            <QueueFormInput placeholder="Email" className="font-joseph-sans" />

            <div className="mb-7">
              <QueueFormInput
                placeholder="City (Optional)"
                width="w-[40%]"
                className="mr-3 font-joseph-sans"
              />

              <QueueFormInput
                placeholder="State (Optional)"
                width="w-1/2"
                className="font-joseph-sans"
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
            />

            <QueueFormInput
              placeholder="Utility Provider (Optional)"
              className="font-joseph-sans"
            />

            <QueueFormInput
              placeholder="Zip Code (Optional)"
              className="font-joseph-sans mb-[3rem]"
            />

            <div className="flex items-center">
              <button className="bg-black px-2 py-1 rounded-md mr-2 shadow-md font-joseph-sans">
                Upload
              </button>
              <p className="text-[#006FEE] text-xs cursor-pointer font-joseph-sans">
                Format instructions
                
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end ">
          <button className="bg-black px-2 py-1 rounded-md shadow-md font-joseph-sans">
            Add to Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueFormCard;
