"use client";

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { CiSettings } from "react-icons/ci";


const Header = () => {
    const url = usePathname();
return (
    <div className="grid grid-cols-6 items-center bg-[#F4F4F5]">
        <div className="p-2 col-span-1">
            <Image
                src={"/CHORA.svg"}
                width={200}
                height={200}
                alt="Chora Logo"
            />
        </div>

        <div className="justify-self-center -ml-20 col-span-4">
            <Link href={"/retrieval"}>
                <button className={`p-2 rounded-md mr-3 ${url == "/retrieval" ? "bg-white shadow-md" : ""} text-[#71717A] text-xl font-joseph-sans`}>
                    RETRIEVE
                </button>
            </Link>

            <Link href={"/home"}>
                <button className={`p-2 rounded-md ${url == "/home" ? "bg-white shadow-md" : ""} text-[#71717A] text-xl font-joseph-sans`}>
                    ANALYZE
                </button>
            </Link>
        </div>

        <div className="justify-self-end col-span-1">
            <Link href={"/settings"}>
                <button className={`p-2 rounded-md text-[#71717A] text-xl font-joseph-sans`}>
                    <CiSettings size={40} />
                </button>
            </Link>
        </div>
    </div>
)
}

export default Header