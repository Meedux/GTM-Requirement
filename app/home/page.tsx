import AccountData from "@/components/AccountData";
import Accounts from "@/components/Accounts";
import FolderData from "@/components/FolderData";
import LineCard from "@/components/LineCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen px-[5%] sm:pl-0 sm:pr-[5%] p-3 mb-7">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8">
          <div className="h-full grid grid-rows-2 gap-4 mb-4">
            {/* Account Information */}
            <AccountData />

            {/* Second Row */}
            <LineCard />
          </div>
          <Accounts />
        </div>
      </div>
    </>
  );
};

export default page;
