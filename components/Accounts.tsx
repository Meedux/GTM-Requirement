"use client";

import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AccountTableRow from "./TableRow/AccountTableRow";
import { usePathname } from "next/navigation";

const Accounts = () => {
  const url = usePathname();
  return (
    <div className="mt-7 md:mt-0">
      <div className={`flex flex-row ${url === '/retrieval' ? "justify-end" : url === "/settings"? "mt-1 lg:-mt-[2.2rem] justify-between" : "justify-between"} items-center w-[100%] lg:w-[110%]`}>
        <div className="">
          {url === "/home" && (
            <div className="flex items-center">
              <button className="bg-black mb-1 px-1 py-1 text-white text-center rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
                Move to Project
              </button>
            </div>
          )}
          {url === "/settings" && (
            <div className="flex items-center">
              <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[10px] md:text-base">
                Select Billing Period
              </button>
            </div>
          )}
          {url === "/retrieval" && (
            <div className="flex w-full">
              <div className="flex justify-end">
                <button className="bg-black mb-1 px-4 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[10px] md:text-base">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`${url === '/retrieval' ? "hidden" : "flex"}`}>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Delete
          </button>
        </div>
      </div>
      <div className={`border border-gray-300 rounded-md shadow-lg w-[100%] lg:w-[110%] card ${url === "/home" ? "h-[96.5%]" : "h-[101.5%]"} overflow-auto`}>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold whitespace-nowrap">
                Account #
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                City
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                State
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                Utility
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold whitespace-nowrap">
                Sync Date
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                Folder
              </th>
            </tr>
          </thead>
          <tbody>
            <AccountTableRow
              accountNumber="110001"
              city="San Francisco"
              state="CA"
              utility="PG&E"
              date="02/11/24"
              folderName="Mcdonalds"
            />
          </tbody>
        </table>
      </div>

      {url === "/retrieval" && (
        <div className="text-center w-[100%] lg:w-[110%] mt-4">
          <button className="bg-[#006FEE] mb-1 px-4 py-2 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Retrieve
          </button>
        </div>
      )}

      
    </div>
  );
};

export default Accounts;
