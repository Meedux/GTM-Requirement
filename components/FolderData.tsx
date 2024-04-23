import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import FolderTableRow from "./TableRow/FolderTableRow";

const FolderData = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Create Project
          </button>
        </div>

        <div className="flex">
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Delete
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg w-full card h-[96%] md:h-[93%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-start text-black font-bold font-joseph-sans">
                Name
              </th>
              <th className="px-4 py-2 text-start text-black font-bold font-joseph-sans">
                Last Modified
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <FolderTableRow
                folderName="Dummy Data 2"
                date="2023-04-22"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FolderData;
