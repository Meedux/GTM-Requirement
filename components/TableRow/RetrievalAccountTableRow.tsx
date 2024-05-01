import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const RetrievalAccountTableRow = ({
    LastName,
    FirstName,
    city,
    state,
    utility,
    folderName,
}: {
    LastName: string;
    FirstName: string;
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
      <td className="text-[12px] sm:text-[14px]  text-black font-joseph-sans">{LastName}</td>
      <td className="text-[12px] sm:text-[14px]  text-black font-joseph-sans">{FirstName}</td>
      <td className="text-[12px] sm:text-[14px]  text-gray-500 font-joseph-sans whitespace-nowrap">{city}</td>
      <td className="text-[12px] sm:text-[14px] text-gray-500 font-joseph-sans">{state}</td>
      <td className="text-[12px] sm:text-[14px] text-black font-joseph-sans">{utility}</td>
      <td className="flex items-center justify-start">
        <span className="text-[12px] sm:text-[14px] bg-[#0846F7] text-white font-joseph-sans py-1 px-2 rounded">
          {folderName}
        </span>
      </td>
    </tr>
  );
};

export default RetrievalAccountTableRow;
