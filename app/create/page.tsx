import Image from "next/image";
import React from "react";
import Create from "@/components/Create";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full bg-white h-screen">
      <div className="flex flex-col justify-center">
        <div className="mb-[2rem] flex items-center justify-center w-full text-center">
          <Image src={"/CHORA.svg"} width={400} height={200} alt="Chora Logo" />
        </div>
        <Create />
      </div>
    </div>
  );
};

export default page;
