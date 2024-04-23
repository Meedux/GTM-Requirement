"use client";
import React, { useState } from 'react'
import Button from './Sidebar/Button'
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`h-screen w-[2rem] block md:hidden flex-col justify-center items-center`}>
      <button className="fixed top-4 left-4 text-3xl" onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <div className={`h-screen w-[30rem] flex-col justify-center items-center md:flex hidden`}>
      <h1 className="text-black font-bold text-8xl text-center font-joseph-sans mb-4">Chora</h1>

      <Button name='HOME' url="/home" />

      <Button name='RETRIEVAL' url="/retrieval" />

      <Button name='ANALYSIS' url="/analysis" />

      <Button name='SETTINGS' url="/settings" />
    </div>

    <div className={`fixed top-0 left-0 ${isOpen ? "block" : "hidden" } h-screen w-screen bg-black bg-opacity-50 z-50`} onClick={handleToggle}></div>

    <div className="fixed top-0 left-0 block md:hidden h-screen w-[30rem] bg-white z-50 transform transition-transform duration-300 ease-in-out" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
      <button className="fixed top-4 left-4 text-3xl" onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="h-screen w-[30rem] flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-5xl text-center font-joseph-sans mb-4">Chora</h1>

        <Button name='HOME' url="/portal" />

        <Button name='RETRIEVAL' url="/retrieval" />

        <Button name='ANALYSIS' url="/analysis" />

        <Button name='SETTINGS' url="/settings" />
      </div>
    </div>
    </>
  );
}

export default Sidebar