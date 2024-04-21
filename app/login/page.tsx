import Form from '@/components/Form'
import { Container } from 'postcss'
import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center items-center bg-white h-screen">
            <div className='flex flex-col justify-center'>
                <div className="mb-[2rem] w-full text-center">
                    <span className="text-black font-bold text-9xl text-center">
                        Chora
                    </span>
                </div>

                <Form />
            </div>
        </div>
    )
}


export default page