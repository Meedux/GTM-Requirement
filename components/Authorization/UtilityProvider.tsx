import React from "react";

const UtilityProvider = ({
  setFormState,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="h-screen mx-[10%] flex flex-col justify-center items-end">
      <h1 className="text-white font-joseph-sans text-8xl mb-9 font-bold">
        Chora
      </h1>
      <h1 className="text-white font-joseph-sans text-3xl mb-5 font-bold">
        Utility Data Authorzation Portal
      </h1>
      <p className="text-white font-joseph-sans text-3xl mb-5 font-light">
        Search and select your utility provider below
      </p>
      <input
        type="text"
        className="p-2 rounded-md w-[50%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
        placeholder="Search"
      />
      <div className="text-end">
        <span className="text-white font-joseph-sans cursor-pointer text-sm">
          Cant Find Your Utility Company?
        </span>
      </div>

      <div className="flex flex-col items-end mt-5">
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={e => setFormState("signin")}>
          Continue {"->"}
        </button>
      </div>
    </div>
  );
};

export default UtilityProvider;
