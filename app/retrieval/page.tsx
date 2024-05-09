import AccountData from "@/components/AccountData";
import Accounts from "@/components/Accounts";
import FolderData from "@/components/FolderData";
import QueueFormCard from "@/components/QueueFormCard";
import AccountsTable from "@/components/Retrieval/AccountsTable";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-full overflow-scroll px-[5%]">
        <div className="h-[105%] py-[5%] grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
          <div className=" grid grid-rows-2 gap-6">
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