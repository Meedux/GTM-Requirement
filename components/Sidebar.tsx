"use client";
import React, { useState } from "react";
import Button from "./Sidebar/Button";
import { useMediaQuery } from "react-responsive";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`block md:hidden p-2 shadow-lg flex-col justify-center items-center`}>
      <button className="text-3xl" onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
{/* 
      <button className="fixed top-4 left-4 text-3xl bg-black rounded-md p-2" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button> */}
      <div className="h-screen md:flex hidden justify-center items-center">
        <div
          className={`h-[80%] w-[20rem] flex flex-col justify-between items-center`}
        >
          <Image src={'/CHORA.svg'} className="mb-7" width={200} height={200} alt='Chora Logo' />

          <Button name="HOME" url="/home" />

          <Button name="RETRIEVAL" url="/retrieval" />

          <Button name="ANALYSIS" url="/analysis" />

          <Button name="SETTINGS" url="/settings" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 ${
          isOpen ? "block" : "hidden"
        } h-screen w-screen bg-black bg-opacity-50 z-50`}
        onClick={handleToggle}
      ></div>

      <div
        className="fixed top-0 left-0 block md:hidden h-screen w-[20rem] bg-white z-50 transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <button className="fixed top-4 left-3 text-3xl" onClick={handleToggle}>
          <RiCloseFill 
            className="text-black"
            size={30}
          />
        </button>

        <div className="h-screen md:hidden flex justify-center items-center">
          <div
            className={`h-[80%] w-[20rem] flex-col justify-between items-center flex`}
          >
            <Image src={'/CHORA.svg'} className="mb-7" width={200} height={200} alt='Chora Logo' />

            <Button name="HOME" url="/home" />

            <Button name="RETRIEVAL" url="/retrieval" />

            <Button name="ANALYSIS" url="/analysis" />

            <Button name="SETTINGS" url="/settings" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
