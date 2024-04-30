import React from "react";

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
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="cardNumber"
                  className="text-black text-[7px] sm:text-xs font-joseph-sans"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="border border-gray-300 rounded-md p-2 text-black"
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="flex flex-col justify-center items-center w-full font-joseph-sans">
                  <label
                    htmlFor="expirationDate"
                    className="text-black text-[7px] sm:text-xs whitespace-nowrap font-joseph-sans"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    className="border border-gray-300 rounded-md p-2 w-full font-joseph-sans"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-full text-black">
                  <label
                    htmlFor="cvv"
                    className="text-black text-[7px] sm:text-xs font-joseph-sans"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="border border-gray-300 rounded-md p-2 w-full text-black font-joseph-sans"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <div>
                <p className="font-bold text-black text-[14px] sm:text-lg mb-3 font-joseph-sans">
                  Billing Address
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-black text-[7px] sm:text-xs font-bold font-joseph-sans mb-3">
                      Street:{" "}
                    </span>
                    <span className="text-black text-[7px] sm:text-xs font-bold font-joseph-sans mb-3">
                      State:{" "}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-[7px] sm:text-xs font-bold font-joseph-sans mb-3">
                      City:{" "}
                    </span>
                    <span className="text-black text-[7px] sm:text-xs font-bold font-joseph-sans">
                      Zip Code:{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-black text-[7px] sm:text-base font-joseph-sans mb-3">
                03/22/24 . Current
              </span>
              <span className="text-black text-[7px] sm:text-base font-joseph-sans mb-3">
                Fixed Bill: $500
              </span>
              <span className="text-black text-[7px] sm:text-base font-joseph-sans mb-7">
                Total Syncs: 23
              </span>
            </div>
          </div>

          <div className="flex justify-start">
            <button className="bg-black text-white px-2 py-1 text-[12px] sm:text-sm rounded-md shadow-lg font-joseph-sans">
              Add New Payment Method
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
