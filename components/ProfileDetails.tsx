"use client";

import React , { useState } from "react";

const ProfileDetails = () => {
  const [details, setDetails] = useState("profile");
  return (
    <div className="border border-gray-300 rounded-md shadow-lg card h-[100%]  w-full ">
      <div className="flex px-[8rem] justify-between border-b border-gray-300 bg-[#F4F4F5] p-1">
        <span className={`font-bold px-[3rem] py-1 ${details == "profile" ? "bg-white rounded-md shadow-lg" : ""} text-black font-joseph-sans cursor-pointer`} onClick={e => setDetails("profile")}>
          Profile
        </span>

        <span className={`font-bold px-[3rem] py-1 ${details == "admin" ? "bg-white rounded-md shadow-lg" : ""} text-black font-joseph-sans cursor-pointer`} onClick={e => setDetails("admin")}>
          Admin
        </span>

        <span className={`font-bold px-[3rem] py-1 ${details == "notifications" ? "bg-white rounded-md shadow-lg" : ""} text-black font-joseph-sans cursor-pointer`} onClick={e => setDetails("notifications")}>
          Notifications
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 p-3">
        <div className="flex flex-col">
          <span className="text-black font-joseph-sans mb-3 text-[12px] md:text-base">Email: </span>
          <span className="text-black font-joseph-sans mb-3 text-[12px] md:text-base">First Name: </span>
          <span className="text-black font-joseph-sans mb-7 text-[12px] md:text-base">Last Name: </span>

          <input
            type="password"
            className="p-2 rounded-md h-[3rem] bg-[#E7F1FE] mb-3 text-black font-joseph-sans"
            placeholder="New Password"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-black font-joseph-sans mb-3 text-[12px] md:text-base">
            Organization:{" "}
          </span>
          <span className="text-black font-joseph-sans mb-3 text-[12px] md:text-base">City: </span>
          <span className="text-black font-joseph-sans mb-7 text-[12px] md:text-base">State: </span>

          <input
            type="password"
            className="p-2 rounded-md h-[3rem] bg-[#E7F1FE] mb-3 text-black font-joseph-sans"
            placeholder="Confirm New Password"
          />
        </div>
      </div>

      <div className="flex justify-end p-3">
        <button className="bg-black text-white px-2 py-1 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
