"use client";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname } from 'next/navigation';
import React from 'react'
import AccountTableRow from './TableRow/AccountTableRow';
import { AuthorizedAccount } from '@/redux/util_types';

const SettingAcount = () => {
    const url = usePathname();
    const retrieval = useAppSelector((state) => state.retrieval);
    const dispatch = useAppDispatch();
  
    return (
      <div className="mt-7 md:mt-0">
        <div className={`border border-gray-300 rounded-md shadow-lg w-[100%] lg:w-[110%] card h-[100%] overflow-auto`}>
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-300 bg-[#F4F4F5]">
                {/* <th className="px-4 py-2">
                  <input type="checkbox" />
                </th> */}
                <th className="px-4 py-2 text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold whitespace-nowrap">
                  Account #
                </th>
                <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                  Last Name
                </th>
                <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                  First Name
                </th>
                <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold ">
                  Utility
                </th>
                <th className="text-start pr-2 sm:pr-1 text-black text-[12px] sm:text-[14px] font-bold whitespace-nowrap">
                  Sync Date
                </th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    );
}

export default SettingAcount