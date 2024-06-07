import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Callback = ({
    code,
    setCode,
} : {
    code: string | null,
    setCode: React.Dispatch<React.SetStateAction<string | null>>
}) => {
  return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <Image src={'/CHORA-WHITE.svg'} className="mb-7" width={300} height={200} alt='Chora Logo' />

        {/* Terms and Conditions Card with white Background */}
        <div className="bg-white p-2 md:w-[50%] h-[70%] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <h1 className="text-black font-joseph-sans text-center text-4xl mb-4 font-bold">Authorization Done</h1>
            <p className="text-black font-joseph-sans text-center text-2xl mb-4">You can now close the window...</p>
        </div>
    </div>
  );
};

export default Callback;