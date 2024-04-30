import React from "react";
import AccountCardRow from "../TableRow/AccountCardRow";

const AccountCardOne = () => {
  return (
    <div className="">
      <div className="border p-2 border-gray-300 rounded-md shadow-lg w-full card h-[96%] md:h-[93%] overflow-auto">
        <div className="flex justify-between items-center w-[100%] pb-2 border-b border-gray-300">
          <input
            type="text"
            id="expirationDate"
            className="bg-[#E7F1FE] font-joseph-sans rounded-md p-2 w-[50%]"
            placeholder="Search"
          />

          <div className="flex">
            <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs">
              Sync
            </button>
            <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs">
              Download
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="p-1">
              <th></th>
              <th className=" text-[7px] sm:text-xs text-black font-bold font-joseph-sans">
                Account #
              </th>
              <th className=" text-[7px] sm:text-xs text-black font-bold font-joseph-sans">
                City, State
              </th>
              <th className=" text-[7px] sm:text-xs text-black font-bold font-joseph-sans">
                Utility
              </th>
              <th className=" text-[7px] sm:text-xs text-black font-bold font-joseph-sans">
                Last Sync
              </th>
            </tr>
          </thead>
          <tbody>
            <AccountCardRow />
            <AccountCardRow />
            <AccountCardRow />
            <AccountCardRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountCardOne;
