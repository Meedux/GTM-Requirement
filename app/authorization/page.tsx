import Authorization from '@/components/Authorization'
import React, { Suspense } from 'react'


const page = () => {
    return (
        <>
            <div className="bg-cover bg-no-repeat bg-fixed bg-center h-screen" style={{ backgroundImage: "url(bg.svg)" }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Authorization />
                </Suspense>
            </div>
        </>
    )
}

export default page