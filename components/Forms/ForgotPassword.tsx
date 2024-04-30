import React from 'react'

const ForgotPassword = ({
    setFormState,
    deny,
    sent,
    emailLogin,
    setEmailLogin,
    verifyEmail
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>,
    deny: Boolean,
    sent: Boolean,
    emailLogin: string,
    setEmailLogin: React.Dispatch<React.SetStateAction<string>>,
    verifyEmail: (email: string) => void
}) => {
  return (
    <>
          <div className="flex flex-col items-center">
            {deny && (
              <p className="text-red-600 w-[30rem] text-center font-joseph-sans">
                An account with that email cannot be found. Please try a
                different email of contact customer service.
              </p>
            )}

            {sent && (
              <>
                <h1 className="text-3xl text-black font-bold font-joseph-sans">
                  Check your email!
                </h1>
                <p className="text-[#006FEE] mb-5 font-bold text-xl w-[40rem] text-center font-joseph-sans">
                  {"We’ve"} sent instructions for resetting your password to
                </p>
              </>
            )}
            <div className="flex flex-col items-center mb-4">
              <input
                type="text"
                className="p-2 text-black rounded-md w-[20rem] h-[3rem] bg-[#E7F1FE] mb-1"
                placeholder="Email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <button
                className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg"
                onClick={(e) => sent ? setFormState("resetPassword") : verifyEmail(emailLogin)}
              >
                {sent ? "LOGIN" : "RESET PASSWORD"}
              </button>
              {sent ? (
                <p className="text-[#006FEE] font-joseph-sans">
                  {"Didn’t"} get a email?
                  <br />
                  Check your Junk Mail folder; if you still {"don’t"} have any
                  luck,
                  <br />
                  <span className="font-semibold font-joseph-sans">
                    contact customer service.
                  </span>
                </p>
              ) : (
                <p
                  className="text-[#006FEE] cursor-pointer font-joseph-sans"
                  onClick={(e) => setFormState("login")}
                >
                  Cancel
                </p>
              )}
            </div>
          </div>
        </>
  )
}

export default ForgotPassword