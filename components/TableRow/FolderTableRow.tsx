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
        <td className="px-4 py-2 font-bold text-black font-joseph-sans text-sm">
          <div className="flex">
            <FaRegFolder className="text-black mr-2" />
            {folderName}
          </div>
        </td>
        <td className="px-4 py-2 font-bold text-black font-joseph-sans text-sm">
          {date}
        </td>
        <td className="flex justify-center items-center mr-[50px]">
          <FaRegTrashAlt className="text-red-500" />
        </td>
      </tr>
    </>
  );
};

export default FolderTableRow;
