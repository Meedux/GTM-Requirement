import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const RetrievalAccountTableRow = ({
    LastName,
    FirstName,
    email,
    folderName,
    isAuthorized,
}: {
    LastName: string;
    FirstName: string;
    email: string;
    folderName: string;
    isAuthorized: boolean;
}) => {
  return (
    <tr className="mx-4">
      <td className="px-4 py-2 flex items-center justify-center">
        <input type="checkbox" className="checkbox-primary" />
      </td>
      <td className="text-[12px] sm:text-[14px]  text-black font-joseph-sans">{LastName}</td>
      <td className="text-[12px] sm:text-[14px]  text-black font-joseph-sans">{FirstName}</td>
      <td className="text-[12px] sm:text-[14px]  text-black font-joseph-sans">{email}</td>
      <td className="flex items-center ">
        <span className="text-[12px] sm:text-[14px] bg-[#0846F7] text-white font-joseph-sans py-1 px-2 rounded">
          {folderName}
        </span>
      </td>
      <td className="px-2 py-2  text-black font-joseph-sans">
      <div
          className={`w-4 h-4 rounded-full ${isAuthorized ? 'bg-green-500' : 'bg-red-500'}`}
        ></div>
      </td>
    </tr>
  );
};

export default RetrievalAccountTableRow;
