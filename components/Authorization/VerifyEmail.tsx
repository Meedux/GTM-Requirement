import Image from 'next/image'
import React, { useContext } from 'react'
import { AuthContext } from '@/util/AuthContext'
import { userPool } from '@/util/UserPool'
import { CognitoUser } from 'amazon-cognito-identity-js'

const VerifyEmail = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
    const [error, setError] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)
    const [code, setCode] = React.useState<string>('')

    const { email } = useContext(AuthContext)

    const handleVerification = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const userData = {
            Username: email,
            Pool: userPool
          }
      
          const cognitoUser = new CognitoUser(userData);

          if(code !== ""){
            cognitoUser.confirmRegistration(code, true, (err, result) => {
                if(err){
                    console.error(err)
                    setIsError(true)
                    setError(err.message)
                    setTimeout(() => {
                        setIsError(false)
                        setError('')
                    }, 5000)
                } else if(result) {
                    console.log(result)
                    setFormState("terms")
                }
            })
          }
    }
  return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">Chora</h1>

        {/* Sign In Card with white Background */}
        <div className="bg-white p-2 w-[25rem] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9'/>
            <h1 className="text-black font-joseph-sans text-4xl mb-4 font-bold">Check your email</h1>
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
                placeholder="Verification Code"
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <button className="bg-black text-white w-[80%] h-[3rem] rounded-md mb-5" onClick={e => handleVerification(e)}>Create Account</button>
        </div>
    </div>
  )
}

export default VerifyEmail