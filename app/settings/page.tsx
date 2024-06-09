import Accounts from "@/components/Accounts";
import CardInfo from "@/components/CardInfo";
import ProfileDetails from "@/components/ProfileDetails";
import SettingAcount from "@/components/SettingAcount";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full mt-12 h-screen px-[5%] sm:pl-0 sm:pr-[5%] ">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8">
          <div className="h-full grid grid-rows-2 gap-4 mb-4">
            {/* Account Information */}
            <ProfileDetails />

            {/* Card Information */}
            <CardInfo />
          </div>
          <SettingAcount />
        </div>
      </div>
    </>
  )
}

export default page