import React from 'react'

const ResetPassword = ({
    setFormState
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <input
                type="password"
                className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-[1rem]"
                placeholder="New Password"
              />
              <input
                type="password"
                className="p-2 rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-1"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <button className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg font-joseph-sans" onClick={e => setFormState("success")}>
                Save
              </button>
            </div>
          </div>
        </>
  )
}

export default ResetPassword