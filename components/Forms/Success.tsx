import React from "react";

const Success = ({
    setFormState,
}: {
    setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[30px] md:text-5xl text-black font-bold text-center font-joseph-sans">
        Success!
      </h1>
      <p className="text-[#006FEE] mb-5 font-bold text-[16px] md:text-xl w-[40rem] text-center font-joseph-sans">
        Your pasword has been sucessfully reset.
      </p>

      <div className="flex flex-col items-center text-center">
        <button
          className="bg-[#006FEE] w-[12rem] text-white text-center p-2 rounded-md shadow-lg font-joseph-sans"
          onClick={(e) => setFormState("login")}
        >
          LOGIN
        </button>
      </div>
    </div>
    </>
  );
};

export default Success;
