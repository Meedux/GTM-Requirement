import Image from 'next/image'
import React from 'react'

const SignInForm = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">Chora</h1>

        {/* Sign In Card with white Background */}
        <div className="bg-white p-2 w-[25rem] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9'/>
            <h1 className="text-black font-joseph-sans text-4xl mb-4 font-bold">Sign In</h1>
            <input
                type="text"
                className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
                placeholder="Email"
            />
            <input
                type="password"
                className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
                placeholder="Password"
            />
            <button className="bg-black text-white w-[80%] h-[3rem] rounded-md" onClick={e => setFormState("terms")}>Sign In</button>
            <div className="flex flex-col items-center mt-5">
                <span className="text-black font-joseph-sans text-sm">{"Don't"} have an account?</span>
                <span className="text-black font-joseph-sans text-sm">Sign Up</span>
            </div>
        </div>
    </div>
  )
}

export default SignInForm