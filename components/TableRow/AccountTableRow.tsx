import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const AccountTableRow = ({
    accountNumber,
    cityState,
    utility,
    date,
    folderName,
}: {
    accountNumber: string;
    cityState: string;
    utility: string;
    date: string;
    folderName: string;
}) => {
  return (
    <tr className="mx-4">
      <td className="px-4 py-2 flex items-center justify-center">
        <input type="checkbox" />
      </td>
      <td className="text-sm  text-black font-joseph-sans">{accountNumber}</td>
      <td className="text-sm  text-black font-joseph-sans">{cityState}</td>
      <td className="text-sm  text-black font-joseph-sans">{utility}</td>
      <td className=" text-black font-joseph-sans"></td>
      <td className="text-sm  text-black font-joseph-sans">{date}</td>
      <td className="">
        <span className="text-sm bg-green-300 text-green-600 py-1 px-2 rounded">
          {folderName}
        </span>
      </td>
      <td className="flex justify-center items-center mr-[20px]">
        <FaRegTrashAlt className="text-red-500" />
      </td>
    </tr>
  );
};

export default AccountTableRow;
