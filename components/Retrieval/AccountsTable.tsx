"use client";

import React, { use, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import RetrievalAccountTableRow from "../TableRow/RetrievalAccountTableRow";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AccountQueue } from "@/redux/util_types";
import { getQueuedAccounts, sendAuthorization } from "@/redux/retrieval/thunks";

const AccountsTable = () => {
  const url = usePathname();
  const retrieval = useAppSelector((state) => state.retrieval);
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(retrieval.accountQueue.length);
  }, [retrieval.accountQueue]);

  useEffect(() => {
    if(retrieval.selectedFolder.name !== "") {
      Promise.resolve(dispatch(getQueuedAccounts()))
    }
  }, [retrieval.selectedFolder])

  return (
    <div className="mt-[3rem] md:mt-0">
        <div className="flex justify-end w-[100%] lg:w-[110%]">
          <button className="bg-black mb-1 px-4 py-1 text-white text-center p-2 rounded-md shadow-lg font-joseph-sans text-xs md:text-base">
            Delete
          </button>
        </div>
      <div className="border border-gray-300 rounded-md shadow-lg w-[100%] lg:w-[110%] card h-[96.5%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300 bg-[#F4F4F5]">
              <th className="px-4 py-5">
                <input type="checkbox" className="hidden" />
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold">
                Last Name
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold">
                First Name
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Email
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Folder
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Status
              </th>
              <th className="text-start whitespace-nowrap pr-2 sm:pr-1 text-black text-[10px] sm:text-[12px] font-bold ">
                Count: {count}
              </th>
            </tr>
          </thead>
          <tbody>
            {retrieval.accountQueue.map((account: AccountQueue) => (
              <RetrievalAccountTableRow
                key={account.lastName}
                LastName={account.lastName}
                FirstName={account.firstName}
                email={account.email}
                folderName={retrieval.selectedFolder.name}
                isAuthorized={account.isAuthorized}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* {url === "/retrieval" && (
        <div className="text-center w-[100%] lg:w-[110%] mt-4">
          <button 
            className="bg-[#006FEE] mb-1 px-6 py-1 text-white text-center rounded-lg shadow-lg font-joseph-sans text-xs md:text-base"
            onClick={e => dispatch(sendAuthorization())}
          >
            Retrieve
          </button>
        </div>
      )} */}
    </div>
  );
};

export default AccountsTable;
