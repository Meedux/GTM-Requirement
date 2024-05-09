"use client";

import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import RetrievalAccountTableRow from "../TableRow/RetrievalAccountTableRow";
import { usePathname } from "next/navigation";

const AccountsTable = () => {
  const url = usePathname();
  return (
    <div className="mt-7 md:mt-0">
      <div
        className={`flex flex-row ${
          url === "/retrieval" ? "justify-end" : "justify-between"
        } items-center w-[100%] mt-1 lg:-mt-[1.7rem]  lg:w-[110%]`}
      >
        <div className="">
          <div className="flex w-full">
            <div className="flex justify-end">
              <button className="bg-black mb-1 px-4 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* <div className={`${url === "/retrieval" ? "hidden" : "flex"}`}>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Delete
          </button>
        </div> */}
      </div>
      <div className="w-[100%] lg:w-[110%] flex justify-between mt-1 px-6">
        <span className="text-[12px] md:text-base font-bold text-black font-joseph-sans">
          Account Retrievals
        </span>
        <span className="text-[12px] md:text-base font-bold text-black font-joseph-sans">
          Queue Count: 1
        </span>
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg w-[100%] lg:w-[110%] card h-[89%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold">
                Last Name
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold">
                First Name
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                City
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                State
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Utility Provider
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Folder
              </th>
            </tr>
          </thead>
          <tbody>
            <RetrievalAccountTableRow
              LastName="Doe"
              FirstName="John"
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
          <button className="bg-[#006FEE] mb-1 px-6 py-1 text-white text-center rounded-lg shadow-lg font-joseph-sans text-xs md:text-base">
            Retrieve
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountsTable;
