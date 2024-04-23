import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
  return (
    <>
        <div className="flex flex-col md:flex-row bg-white h-screen">
            <Sidebar />
            {children}
        </div>
    </>
  )
}

export default layout