"use client";
import React, { useEffect, useState } from "react";
import FolderTableRow from "./TableRow/FolderTableRow";
import { usePathname } from "next/navigation";
import { Folder } from "@/redux/util_types";
import {
  fetchFolders,
} from "@/redux/retrieval/thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

  

const FolderData = () => {
  const url = usePathname();
  const dispatch = useAppDispatch();
  const retrieval = useAppSelector((state) => state.retrieval);


  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    Promise.resolve(dispatch(fetchFolders()))
  }, [retrieval.selectedFolder, retrieval.accountQueue]);

  useEffect(() => {
    setFolders(retrieval.folders);
  }, [retrieval.folders]);

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base">
            Create Project
          </button>
        </div>

        {
          url === '/retrieval' && (
            <span className="font-joseph-sans underline text-black text-[12px] sm:text-base">
              {"Select Account Location(s): "}
            </span>
          )
        }

        {
          url === '/home' && (
            <div className="flex">
              <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base">
                Sync
              </button>
              <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base">
                Download
              </button>
              <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] sm:text-base">
                Delete
              </button>
            </div>
          )
        }
      </div>
      <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[90%] p-3 ">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-[12px] sm:text-base text-start text-black font-bold font-joseph-sans">
                Name
              </th>
              <th className="px-4 py-2 text-[12px] sm:text-base whitespace-nowrap text-start text-black font-bold font-joseph-sans">
                Last Modified
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              folders.map((folder: Folder) => (
                <FolderTableRow
                    key={folder.name}
                    folder={folder}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FolderData;
