import React from 'react'

const AccountCardTwo = () => {
  return (
    <div className="">
      <div className="border p-2 border-gray-300 rounded-md shadow-lg w-full card h-[96%] md:h-[93%] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className=" text-xs text-black font-bold font-joseph-sans">
                Account #
              </th>
              <th className=" text-xs text-black font-bold font-joseph-sans">
                City, State
              </th>
              <th className=" text-xs text-black font-bold font-joseph-sans">
                Utility
              </th>
              <th className=" text-xs text-black font-bold font-joseph-sans">
                Last Sync
              </th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountCardTwo