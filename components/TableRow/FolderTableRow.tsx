import React from "react";
import { FaRegTrashAlt, FaRegFolder } from "react-icons/fa";

const FolderTableRow = ({
  folderName,
  date,
}: {
  folderName: string;
  date: string;
}) => {
  return (
    <>
      <tr>
        <td className="px-4 py-2 flex justify-center items-center h-full">
          <input type="checkbox" />
        </td>
        <td className="px-2 py-2 font-bold text-black font-joseph-sans text-[12px] sm:text-base ">
          <div className="flex cursor-pointer hover:text-[#00A2FF] whitespace-nowrap">
            <FaRegFolder className="text-black hover:text-[#00A2FF] mr-2" />
            {folderName}
          </div>
        </td>
        <td className="px-4 py-2 font-bold text-black flex items-center font-joseph-sans text-[12px] sm:text-base whitespace-nowrap">
          {date}
          <FaRegTrashAlt className="text-red-500 hover:text-red-700 ml-[50px]" />
        </td>
      </tr>
    </>
  );
};

export default FolderTableRow;
