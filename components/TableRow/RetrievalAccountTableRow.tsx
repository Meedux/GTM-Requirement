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
      <td className="text-sm  text-black font-joseph-sans">{LastName}</td>
      <td className="text-sm  text-black font-joseph-sans">{FirstName}</td>
      <td className="text-sm  text-gray-500 font-joseph-sans">{city}</td>
      <td className="text-sm text-gray-500 font-joseph-sans">{state}</td>
      <td className=" text-black font-joseph-sans">{utility}</td>
      <td className="">
        <span className="text-sm bg-[#0846F7] text-white font-joseph-sans py-1 px-2 rounded-lg">
          {folderName}
        </span>
      </td>
    </tr>
  );
};

export default RetrievalAccountTableRow;
