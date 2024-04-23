import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import FolderTableRow from "./TableRow/FolderTableRow";

const FolderData = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <button className="bg-black mb-1 px-2 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Create Project
          </button>
        </div>

        <div className="flex">
          <button className="bg-black mb-1 mr-2 px-2 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
            Delete
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg card h-[90%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
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
