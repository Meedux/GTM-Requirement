import Image from 'next/image'
import React, { useContext } from 'react'
import { userPool } from '@/util/UserPool'
import { AuthContext } from '@/util/AuthContext'

const SignInForm = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { set } = useContext(AuthContext)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const [error, setError] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)

    const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Validate username
        if (email.length < 1 || !/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u.test(email)) {
            setError('Invalid username');
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
                setError('')
            }, 5000)
            return;
        }
  
        // Validate password
        if (!/^[\S]+.*[\S]+$/u.test(password)) {
            setError('Invalid password');
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
                setError('')
            }, 5000)
            return;
        }

        userPool.signUp(email, password, [], [], (err, data) => {
            if (err) {
                console.error(err)
                setIsError(true)
                setError(err.message)
                setTimeout(() => {
                    setIsError(false)
                    setError('')
                }, 5000)
            } else if (data) {
                console.log(data)
                set(email)
                setFormState("verify")
            }
        })
    }
  return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">Chora</h1>

        {/* Sign In Card with white Background */}
        <div className="bg-white p-2 w-[25rem] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9'/>
            <h1 className="text-black font-joseph-sans text-4xl mb-4 font-bold">Sign In</h1>
            {
                isError && (
                    <div className="text-red-500 p-2 font-joseph-sans">
                        {error}
                    </div>
                )
            }
            <input
                type="text"
                className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="p-2 rounded-md w-[80%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button className="bg-black text-white w-[80%] h-[3rem] rounded-md mb-5" onClick={e => handleSignIn(e)}>Create Account</button>
        </div>
    </div>
  )
}

export default SignInForm