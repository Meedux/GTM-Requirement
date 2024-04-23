"use client";

import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AccountTableRow from "./TableRow/AccountTableRow";
import { usePathname } from "next/navigation";

const Accounts = () => {
  const url = usePathname();
  console.log(url);
  return (
    <div className="mt-7 md:mt-0">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          {url === "/home" && (
            <div className="flex items-center">
              <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
                Move to Project
              </button>
            </div>
          )}
          {url === "/settings" && (
            <div className="flex items-center">
              <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
                Select Billing Period
              </button>
            </div>
          )}
          {url === "/retrieval" && (
            <div className="flex items-center">
              <div className="flex jusitify-end">
                <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex">
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Delete
          </button>
        </div>
      </div>
      {url === "/portal/retrieval" && (
        <div className="flex justify-between mt-3">
          <span className="font-bold text-black font-joseph-sans">
            Account Retrievals
          </span>
          <span className="font-bold text-black font-joseph-sans">
            Queue Count: 1
          </span>
        </div>
      )}
      <div className="border border-gray-300 rounded-md shadow-lg w-[100%] lg:w-[110%] card h-[90%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="text-start text-black text-xs font-bold">
                Account #
              </th>
              <th className="text-start text-black text-xs font-bold ">
                City State
              </th>
              <th className="text-start text-black text-xs font-bold ">
                Zipcode
              </th>
              <th className="text-start text-black text-xs font-bold ">
                Utility
              </th>
              <th className="text-start text-black text-xs font-bold ">
                Sync Date
              </th>
              <th className="text-start text-black text-xs font-bold ">
                Folder
              </th>
            </tr>
          </thead>
          <tbody>
            <AccountTableRow
              accountNumber="110001"
              cityState="San Francisco, CA"
              utility="PG&E"
              date="02/11/24"
              folderName="Mcdonalds"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
