import React from "react";

const QueueFormCard = () => {
  return (
    <div className="">
      <div className="border border-gray-300 rounded-md shadow-lg card h-[90%] p-3 w-full ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="First Name"
            />

            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="Email"
            />

            <div className="mb-7">
              <input
                type="text"
                className="p-2 text-black rounded-md w-[45%] mr-2 h-[3rem] bg-[#E7F1FE] mb-[1rem]"
                placeholder="City (Optional)"
              />

              <input
                type="text"
                className="p-2 text-black rounded-md w-1/2 h-[3rem] bg-[#E7F1FE] mb-[1rem]"
                placeholder="State (Optional)"
              />
            </div>

            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="File Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="Last Name"
            />

            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="Utility Provider (Optional)"
            />

            <input
              type="text"
              className="p-2 text-black rounded-md w-[100%] h-[3rem] bg-[#E7F1FE] mb-[3rem]"
              placeholder="Zip Code (Optional)"
            />

            <div className="flex items-center">
                <button className="bg-black px-4 py-2 rounded-md shadow-md">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueFormCard;
