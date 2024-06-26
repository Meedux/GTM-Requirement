"use client";

import AccountData from "@/components/AccountData";
import Accounts from "@/components/Accounts";
import FolderData from "@/components/FolderData";
import QueueFormCard from "@/components/QueueFormCard";
import AccountsTable from "@/components/Retrieval/AccountsTable";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full mt-2 h-screen px-[5%] sm:pl-0 sm:pr-[5%]">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8">
          <div className="h-full grid grid-rows-2 gap-4 mb-4">
            {/* Account Information */}
            <FolderData />

            {/* Queue Form */}
            <QueueFormCard />
          </div>
          <AccountsTable />
        </div>
      </div>
    </>
  )
}

export default page