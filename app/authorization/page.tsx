import Authorization from '@/components/Authorization'
import React from 'react'


const page = () => {
    return (
        <>
            <div className="bg-cover bg-no-repeat bg-fixed bg-center h-screen" style={{ backgroundImage: "url(bg.svg)" }}>
                <Authorization />
            </div>
        </>
    )
}

export default page