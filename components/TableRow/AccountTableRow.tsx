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
      <td className="px-4 py-2 flex items-center justify-center">
        <input type="checkbox" />
      </td>
      <td className="text-[7px] sm:text-xs text-black font-joseph-sans">{accountNumber}</td>
      <td className="text-[7px] sm:text-xs text-gray-400 font-joseph-sans">{city}</td>
      <td className="text-[7px] sm:text-xs text-gray-400 font-joseph-sans">{state}</td>
      <td className="text-[7px] sm:text-xs text-black font-joseph-sans">{utility}</td>
      <td className="text-[7px] sm:text-xs text-black font-joseph-sans">{date}</td>
      <td className="flex items-center justify-start">
        <span className="text-[7px] sm:text-xs p-1 bg-green-300 text-green-600 sm:py-1 sm:px-2 rounded">
          {folderName}
        </span>
        <FaRegTrashAlt className="text-red-500 ml-[10px]" />
      </td>
    </tr>
  );
};

export default AccountTableRow;
