import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const AccountTableRow = ({
    accountNumber,
    city,
    state,
    utility,
    date,
    folderName,
}: {
    accountNumber: string;
    city: string;
    state: string;
    utility: string;
    date: string;
    folderName: string;
}) => {
  return (
    <tr className="mx-4">
      {/* <td className="px-4 py-2 flex items-center justify-center">
        <input type="checkbox" />
      </td> */}
      <td className="px-4 py-2 text-[12px] sm:text-[14px] pr-2 sm:pr-1 text-black font-joseph-sans">{accountNumber}</td>
      <td className="text-[12px] sm:text-[14px] pr-2 sm:pr-1 text-gray-400 font-joseph-sans whitespace-nowrap sm:whitespace-normal">{city}</td>
      <td className="text-[12px] sm:text-[14px] pr-2 sm:pr-1 text-gray-400 font-joseph-sans">{state}</td>
      <td className="text-[12px] sm:text-[14px] pr-2 sm:pr-1 text-black font-joseph-sans">{utility}</td>
      <td className="text-[12px] sm:text-[14px] pr-2 sm:pr-1 text-black font-joseph-sans">{date}</td>
      <td className="flex items-center justify-start pr-2 sm:pr-1">
        <span className="text-[12px] sm:text-[14px] p-1 bg-[#D1F4E0] text-[#12A150] sm:py-1 sm:px-2 rounded-lg">
          {folderName}
        </span>
        <FaRegTrashAlt className="text-red-500 ml-[10px]" />
      </td>
    </tr>
  );
};

export default AccountTableRow;
