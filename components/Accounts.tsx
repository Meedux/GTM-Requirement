import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import AccountTableRow from "./TableRow/AccountTableRow";

const Accounts = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Move to Project
          </button>
        </div>

        <div className="flex">
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Delete
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg w-[110%] card h-[90%] overflow-auto">
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
              <th className=""></th>
              <th className="text-start text-black text-xs font-bold ">
                Folder
              </th>
              <th className=""></th>
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
