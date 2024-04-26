import React, { useEffect, useContext } from "react";
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/util/AuthContext';

const Success = () => {
    const router = useRouter();
    const { set } = useContext(AuthContext);
    useEffect(() => {
        setTimeout(() => {
            set('');
            router.push('/login');
        }, 3000);
    }, []);
  return (
    <div className="h-screen mx-[10%] flex flex-col justify-center items-end">
      <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">
        Chora
      </h1>
      <h1 className="text-white font-joseph-sans text-3xl mb-5 font-bold">
        Success!
      </h1>
      <p className="text-white font-joseph-sans text-3xl mb-5 font-light text-end md:w-[40%]">
        Your data was sucesfully sent to your Energy Solution Provider.
      </p>

      <p className="text-white font-joseph-sans text-lg mb-5 font-light text-end md:w-[40%]">
        Redirecting back to Login Page...
      </p>
    </div>
  );
};

export default Success;
