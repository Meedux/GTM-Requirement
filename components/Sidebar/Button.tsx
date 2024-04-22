import React from "react";
import Link from "next/link";

const Button = ({ name, url }: { name: string; url: string }) => {
  return (
    <Link href={url}>
      <button className="p-3 rounded-md bg-[#006FEE] text-xl font-joseph-sans mb-6 w-[15rem]">
        {name}
      </button>
    </Link>
  );
};

export default Button;
