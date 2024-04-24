import Image from 'next/image'
import React from 'react'

const TermsConditions = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">Chora</h1>

        {/* Terms and Conditions Card with white Background */}
        <div className="bg-white p-2 w-[50%] h-[70%] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9'/>
            <h1 className="text-black font-joseph-sans text-center text-4xl mb-4 font-bold">Terms and Conditions</h1>
            
            <div className="overflow-y-auto p-2 h-[40%] mb-3">
                <p className="text-black font-joseph-sans text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-black font-joseph-sans text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-black font-joseph-sans text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-black font-joseph-sans text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            <button className="bg-black text-white w-[80%] h-[3rem] rounded-md" onClick={e => setFormState("success")}>Accept</button>
            {/* <div className="flex flex-col items-center mt-5">
                <span className="text-black font-joseph-sans text-sm">Don't agree with our terms?</span>
                <span className="text-black font-joseph-sans text-sm">Contact Us</span>
            </div> */}
        </div>
    </div>
)
}

export default TermsConditions