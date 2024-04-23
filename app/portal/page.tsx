import AccountData from "@/components/AccountData";
import Accounts from "@/components/Accounts";
import FolderData from "@/components/FolderData";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="w-full h-screen overflow-scroll px-[5%]">
        <div className="h-full py-[5%] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full grid grid-rows-2 gap-4">
            {/* Account Information */}
            <AccountData />

            {/* Second Row */}
            <FolderData />
          </div>
          <Accounts />
        </div>
      </div>
    </>
  );
};

export default page;
