import Image from 'next/image'
import React, { useContext } from 'react'
import { userPool } from '@/util/UserPool'
import { AuthContext } from '@/util/AuthContext'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

const SignInForm = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const [error, setError] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)

    const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      
          const authenticationData = {
            Username: email,
            Password: password
          }
      
          const authenticationDetails = new AuthenticationDetails(authenticationData);
      
          const userData = {
            Username: email,
            Pool: userPool
          }
      
          const cognitoUser = new CognitoUser(userData);
      
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
              console.log('onSuccess:', result);
              setFormState('terms');
            },
            onFailure: (err) => {
              console.error('onFailure:', err);
              setError(err.message);
              setTimeout(() => {
                setError("");
              }, 3000);
            },
            newPasswordRequired: (userAttributes, requiredAttributes) => {
              console.log('newPasswordRequired:', userAttributes, requiredAttributes);
            }
          });
    }
  return (
    <div className='h-screen mx-[10%] flex flex-col justify-center items-center'>
        <Image src={'/CHORA.svg'} className="mb-7" width={300} height={200} alt='Chora Logo' />

        {/* Sign In Card with white Background */}
        <div className="bg-white p-2 w-[25rem] flex flex-col justify-center items-center rounded-md shadow-2xl">
            <Image src={'/PG&E.svg'} width={100} height={100} alt='PG&E Logo' className='mt-5 mb-9'/>
            <h1 className="text-black font-joseph-sans text-4xl mb-4 font-bold">Login Account</h1>
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
            <button className="bg-black text-white w-[80%] h-[3rem] rounded-md mb-5" onClick={e => handleSignIn(e)}>Sign In</button>
        </div>
    </div>
  )
}

export default SignInForm