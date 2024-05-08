import Link from 'next/link';
import React from 'react'

const MobileButton = ({ name, url }: { name: string; url: string }) => {
    return (
      <Link href={url}>
        <button className="p-1 rounded-md bg-[#006FEE] text-white text-base font-joseph-sans mb-6 w-[10rem]">
          {name}
        </button>
      </Link>
    );
  };

export default MobileButton