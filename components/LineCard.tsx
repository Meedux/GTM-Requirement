import React from "react";
import LineChart from "./Charts/LineChart";

const LineCard = () => {
  return (
    <>
      <div className="">
        <div className="border border-gray-300 rounded-md shadow-lg card w-full h-[102%] p-3">
          <div className="flex flex-col">
            <div className="flex justify-end">
                <button className="bg-[#E7F1FE] text-gray-500 px-2 py-1 rounded-md shadow-lg font-joseph-sans text-[12px] md:text-base">
                    Set Date Range
                </button>
            </div>

            <div className="flex justify-center items-center">
                <LineChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineCard;
