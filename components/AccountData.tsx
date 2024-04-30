import React from "react";

const AccountData = () => {
  return (
    <div className="">
      <button className="bg-black mb-1 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base">
        Sync
      </button>
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[90%] p-3 ">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-black font-joseph-sans text-[12px] sm:text-base">
            Account Info
          </span>
          <span className="font-bold text-black font-joseph-sans text-[12px] sm:text-base">
            Last Sync: 04/22/2023
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[85%] relative">
          <div className="grid grid-row-2 gap-4">
            <div className="flex flex-col justify-between mb-5">
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Owner Last Name:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Owner First Name:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Associated Names:{" "}
              </span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Avg kwh/Month:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Avg Bill $/Month:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans">
                Owner First Name:{" "}
              </span>
            </div>
          </div>
          <div className="grid grid-row-2 gap-4">
            <div className="flex flex-col justify-between pb-5 md:pb-6">
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                Utility Provider:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                City:{" "}
              </span>
              <span className="text-black text-[10px] sm:text-base underline font-joseph-sans ">
                State:{" "}
              </span>
            </div>

            <div className="flex flex-col justify-between">
              <span className="text-black text-[12px] sm:text-base underline pb-3 md:pb-5 font-joseph-sans ">
                Peak Load:{" "}
              </span>
              <span className="text-black text-[12px] sm:text-base underline font-joseph-sans ">
                State:{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountData;
