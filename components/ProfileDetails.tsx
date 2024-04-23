import React from "react";

const ProfileDetails = () => {
  return (
    <div className="border border-gray-300 rounded-md shadow-lg card h-[100%] p-3 w-full ">
      <div className="flex justify-between mb-4">
        <span className="font-bold text-black font-joseph-sans">
          Profile Details
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <span className="text-black font-joseph-sans mb-3">Email: </span>
          <span className="text-black font-joseph-sans mb-3">First Name: </span>
          <span className="text-black font-joseph-sans mb-7">Last Name: </span>

          <input
            type="password"
            className="p-2 rounded-md h-[3rem] bg-[#E7F1FE] mb-3"
            placeholder="New Password"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-black font-joseph-sans mb-3">
            Organization:{" "}
          </span>
          <span className="text-black font-joseph-sans mb-3">City: </span>
          <span className="text-black font-joseph-sans mb-7">State: </span>

          <input
            type="password"
            className="p-2 rounded-md h-[3rem] bg-[#E7F1FE] mb-3"
            placeholder="Confirm New Password"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-black text-white px-2 rounded-md shadow-lg font-joseph-sans text-sm md:text-base">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
