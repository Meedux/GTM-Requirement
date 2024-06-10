import Image from 'next/image'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Processing = ({
    setFormState,
    code,
    utility,
    email,
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
    code: string | null,
    utility: string,
    email: string,
}) => {
    const [message, setMessage] = useState('Please wait for confirmation...');
    const [success, setSuccess] = useState(false);

    let popup = null;

    useEffect(() => {
        if (code != null) return
        (async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/pge/auth');
                const data = await response.json();
                window.location.href = data.link;
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    useEffect(() => {
        if (code != null) {
            setMessage("Awaiting Confirmation...");

            // Register the User

            (async () => {
                try {
                    const response = await fetch('http://127.0.0.1:8000/account/authorize', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            authToken: code,
                            email: email,
                        }),
                    });

                    if(response.status == 200){
                        setSuccess(true);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            })();
        }
    }, [code]);

    const exit = () => {
        localStorage.removeItem("email");
        redirect("/login");
    }
    
    
return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <Image src={'/CHORA-WHITE.svg'} className="mb-7" width={300} height={200} alt='Chora Logo' />

        {/* Terms and Conditions Card with white Background */}
        <div className="bg-white p-2 md:w-[50%] h-[70%] flex flex-col justify-center items-center rounded-md shadow-2xl">
            {
                !success ? (
                    <>
                        <h1 className="text-black font-joseph-sans text-center text-4xl mb-4 font-bold">Authorizing</h1>
                        <p className="text-black font-joseph-sans text-center text-2xl mb-4">{message}</p>
                        <span className="loading loading-bars loading-lg text-[#337AB7]"></span>
                    </>
                ) : (
                    <>
                        <h1 className="text-black font-joseph-sans text-center text-4xl mb-4 font-bold">Success!</h1>
                        <p className="text-black font-joseph-sans text-center mx-4 text-2xl mb-4">Your data was succesfully shared with your selected Utility. A confirmation has been sent to {email}</p>
                        <button className="bg-black text-xs md:text-base text-white w-[70%] md:w-[40%] h-[3rem] rounded-md mb-5" onClick={e => exit()}>
                            Exit
                        </button>
                    </>
                )
            }
            

            {/* <p className="text-green-500 font-joseph-sans text-center text-2xl mb-4">Success!</p> */}
        </div>
    </div>
)
}

export default Processing