import React from 'react'
import Button from './Sidebar/Button'

const Sidebar = () => {
  return (
    <>
        <div className="h-screen w-[19rem] flex flex-col justify-center items-center">
            <h1 className="text-black font-bold text-8xl text-center font-joseph-sans mb-4">Chora</h1>

            <Button name='HOME' url="/portal" />

            <Button name='RETRIEVAL' url="/portal/retrieval" />

            <Button name='ANALYSIS' url="/portal/analysis" />

            <Button name='SETTINGS' url="/portal/settings" />
        </div>
    </>
  )
}

export default Sidebar