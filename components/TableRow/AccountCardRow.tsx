import React from "react";

const AccountCardRow = () => {
  return (
    <tr className="mb-2">
      <th className="px-4 py-2">
        <input type="checkbox" />
      </th>
      <th className="text-xs text-black font-bold font-joseph-sans">
        1234567890
      </th>
      <th className="text-xs text-black font-bold font-joseph-sans">
        Severn, Maryland
      </th>
      <th className="text-xs text-black font-bold font-joseph-sans"></th>
      <th className="text-xs text-black font-bold font-joseph-sans">
        1/11/1111
      </th>
    </tr>
  );
};

export default AccountCardRow;
