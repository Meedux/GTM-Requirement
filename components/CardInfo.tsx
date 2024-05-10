import React from 'react'
import CardForm from './Forms/CardForm';

const CardInfo = () => {
    return (
        <>
          <div className="">
            <div className="flex justify-end mb-1">
              <button className="bg-black text-white px-2 py-1 rounded-md shadow-lg font-joseph-sans text-[10px] md:text-base">
                Select Billing Period
              </button>
            </div>
            <div className="border border-gray-300 rounded-md shadow-lg card h-[98%] md:h-[95%] p-3 w-full ">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <CardForm />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-[12px] md:text-base font-joseph-sans mb-3">
                    03/22/24 . Current
                  </span>
                  <span className="text-black text-[12px] md:text-base font-joseph-sans mb-3">
                    Fixed Bill: $500
                  </span>
                  <span className="text-black text-[12px] md:text-base font-joseph-sans mb-7">
                    Total Syncs: 23
                  </span>
                </div>
              </div>
    
              <div className="flex justify-start">
                <button className="bg-black text-white px-2 py-1 text-[12px] md:text-base rounded-md shadow-lg font-joseph-sans">
                  Add New Payment Method
                </button>
              </div>
            </div>
          </div>
        </>
      );
}

export default CardInfo