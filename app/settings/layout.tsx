import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
  return (
    <>
        <div className="flex flex-col bg-white">
            <Header />
            <div className="px-[4%] bg-white">
              {children}  
            </div>
        </div>
    </>
  )
}

export default layout