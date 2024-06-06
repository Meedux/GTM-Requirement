import Image from 'next/image'
import React from 'react'

const Processing = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <Image src={'/CHORA-WHITE.svg'} className="mb-7" width={300} height={200} alt='Chora Logo' />

        {/* Terms and Conditions Card with white Background */}
        <div className="bg-white p-2 md:w-[50%] h-[70%] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <h1 className="text-black font-joseph-sans text-center text-4xl mb-4 font-bold">Authorizing</h1>
            <p className="text-black font-joseph-sans text-center text-2xl mb-4">Please wait for confirmation...</p>
            <span className="loading loading-bars loading-lg text-[#337AB7]"></span>

            {/* <p className="text-green-500 font-joseph-sans text-center text-2xl mb-4">Success!</p> */}
        </div>
    </div>
)
}

export default Processing