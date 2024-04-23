import Accounts from "@/components/Accounts";
import CardInfo from "@/components/CardInfo";
import ProfileDetails from "@/components/ProfileDetails";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen overflow-scroll px-[5%]">
        <div className="h-full py-[5%] grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-full grid grid-rows-2 gap-4">
            {/* Account Information */}
            <ProfileDetails />

            {/* Card Information */}
            <CardInfo />
          </div>
          <Accounts />
        </div>
      </div>
    </>
  )
}

export default page