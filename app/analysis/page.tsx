"use client";

import React from 'react'
import AccountCardOne from '@/components/Analysis/AccountCardOne';
import AccountCardTwo from '@/components/Analysis/AccountCardTwo';
import AccountCardThree from '@/components/Analysis/AccountCardThree';
import LineChart from '@/components/Charts/LineChart';



const page = () => {
  
  
  return (
    <div className="w-full h-screen overflow-scroll px-[5%]">
      <div className="h-full py-[5%] grid grid-row-2 gap-4">
          <LineChart />
          <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            <AccountCardOne />
            <AccountCardTwo />
            <AccountCardThree />
          </div>
        </div>
    </div>
  )
}

export default page