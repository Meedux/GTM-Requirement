"use client";

import React from "react";
import { FaRegTrashAlt, FaRegFolder } from "react-icons/fa";

const FolderTableRow = ({
  folderName,
  date,
}: {
  folderName: string;
  date: string;
}) => {
  const [onItemHover, setOnItemHover] = React.useState(false);
  return (
    <>
      <tr>
        <td className="px-4 py-2 flex justify-center items-center h-full">
          <div className="flex items-center cursor-pointer hover:text-[#00A2FF]">
            <input type="checkbox" />
          </div>
        </td>
        <td className="px-2 py-2 text-black font-joseph-sans text-[12px] sm:text-base ">
          <div className={`flex font-joseph-sans ${onItemHover && "text-[#00A2FF]"} cursor-pointer whitespace-nowrap`} onMouseEnter={e => setOnItemHover(true)} onMouseLeave={e => setOnItemHover(false)}>
            <FaRegFolder size={20} className={`text-black text-center ${onItemHover && "text-[#00A2FF]"} mr-2`} />
            {folderName}
          </div>
        </td>
        <td className="px-2 py-2 text-black font-joseph-sans text-[12px] sm:text-base">
          <div className="flex font-joseph-sans cursor-pointer whitespace-nowrap">
            {date}
            <FaRegTrashAlt className="text-red-500 text-center hover:text-red-700 ml-[50px]" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default FolderTableRow;
