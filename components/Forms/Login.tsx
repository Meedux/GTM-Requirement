import React from 'react'

const Login = ({ setFormState }: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
        <div className="flex flex-col items-center mb-4">
            <input
              type="text"
              className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
              placeholder="Email"
            />
            <input
              type="password"
              className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-3"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <button className="bg-[#006FEE] text-white text-center p-2 rounded-md w-[10rem] shadow-lg font-joseph-sans">
              Login
            </button>
            <p
              className="text-[#006FEE] cursor-pointer font-joseph-sans"
              onClick={(e) => setFormState("forgotPassword")}
            >
              Forgot Password?
            </p>
          </div>
    </>
  )
}

export default Login