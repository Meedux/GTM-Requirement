import React from "react";

const AccountData = () => {
  return (
    <div className="">
      <button className="bg-black mb-1 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
        Sync
      </button>
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[90%] p-3 ">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-black font-joseph-sans text-xs md:text-base">
            Account Info
          </span>
          <span className="font-bold text-black font-joseph-sans text-xs md:text-base">
            Last Sync: 04/22/2023
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Owner Last Name:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Owner First Name:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-7">
              Associated Names:{" "}
            </span>

            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Owner Last Name:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Owner First Name:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans">
              Associated Names:{" "}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Utility Provider:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              City:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-7">
              Store:{" "}
            </span>

            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              Peak Load:{" "}
            </span>
            <span className="text-black text-[7px] sm:text-xs underline font-joseph-sans mb-3">
              State:{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountData;
