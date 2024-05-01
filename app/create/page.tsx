import Image from "next/image";
import React from "react";
import Create from "@/components/Create";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white h-screen">
      <div className="flex flex-col justify-center">
        <div className="mb-[2rem] w-full text-center">
          <span className="flex md:hidden justify-center">
            <Image
              src={"/CHORA.svg"}
              width={200}
              height={200}
              alt="Chora Logo"
            />
          </span>

          <span className="hidden md:flex justify-center">
            <Image
              src={"/CHORA.svg"}
              width={400}
              height={200}
              alt="Chora Logo"
            />
          </span>
        </div>
        <Create />
      </div>
    </div>
  );
};

export default page;
