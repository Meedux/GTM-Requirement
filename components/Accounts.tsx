"use client";
import React, { FormEvent, useEffect, useState } from "react";
import FolderTableRow from "./TableRow/FolderTableRow";
import { Folder } from "@/redux/util_types";
import {
  fetchFolders,
} from "@/redux/retrieval/thunks";
import { FaRegFolder, FaRegTrashAlt } from "react-icons/fa";
import AccountTableRow from "./TableRow/AccountTableRow";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AccountQueue, AuthorizedAccount } from "@/redux/util_types";
import FolderRow from "./FolderRow";

const Accounts = () => {
  const url = usePathname();
  const retrieval = useAppSelector((state) => state.retrieval);
  const dispatch = useAppDispatch();

  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    Promise.resolve(dispatch(fetchFolders()))
  }, [retrieval.selectedFolder, retrieval.accountQueue]);


  useEffect(() => {
    setFolders(retrieval.folders);
  }, [retrieval.folders]);

  return (
    <div className="mt-7 md:mt-0">
      <div className={`flex flex-row ${url === '/retrieval' ? "justify-end" : url === "/settings"? "mt-1 lg:-mt-[2.2rem] justify-between" : "justify-between"} items-center w-[100%] lg:w-[110%]`}>
        <div className="">
          <div className="flex items-center">
            <button className="bg-black mb-1 px-1 py-1 text-white text-center rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
              Move to Folder
            </button>
          </div>
        </div>

        <div className={`flex`}>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Sync
          </button>
          <button className="bg-black mb-1 mr-2 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Download
          </button>
          <button className="bg-black mb-1 px-2 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
            Delete
          </button>
        </div>
      </div>
      <div className={`border border-gray-300 flex-row rounded-md shadow-lg w-[100%] lg:w-[110%] card ${url === "/home" ? "h-[96.5%]" : "h-[101.5%]"} overflow-auto`}>
        <div className="bg-[#F4F4F5] border-r border-gray-300 p-2 h-full w-[30%]">
          <span className="px-4 py-5 pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold">Name</span>

          <div className="flex flex-col mt-2">
            {
              folders.map((folder: Folder) => (
                <FolderRow
                    key={folder.name}
                    folder={folder}
                />
              ))
            }


          </div>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-300 bg-[#F4F4F5]">
              <th className="px-4 py-5">
                <input type="checkbox" className="hidden" />
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold">
                Account #
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                City
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                State
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                Utility
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold whitespace-nowrap">
                Sync Date
              </th>
              <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                Folder
              </th>
            </tr>
          </thead>
          <tbody>
            {
              retrieval.selectedFolder.name !== "" && retrieval.accounts.map((account: AuthorizedAccount) => (
                <AccountTableRow
                  key={account.accountNumber}
                  accountNumber={account.accountNumber}
                  city={account.city}
                  state={account.state}
                  utility={account.utility}
                  date={account.date}
                  folderName={retrieval.selectedFolder.name}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
