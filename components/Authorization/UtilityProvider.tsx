import Image from "next/image";
import React from "react";

const UtilityProvider = ({
  setFormState,
  email,
  setEmail,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="h-screen mx-[10%] flex flex-col justify-center items-end">
      <Image src={'/CHORA-WHITE.svg'} className="mb-7" width={300} height={200} alt='Chora Logo' />
      <h1 className="text-white font-joseph-sans text-3xl mb-5 font-bold">
        Utility Data Authorzation Portal
      </h1>
      <p className="text-white font-joseph-sans text-3xl mb-5 font-light">
        Search and select your utility provider below
      </p>
      <input
        type="email"
        className="p-2 rounded-md w-[40%] h-[3rem] text-black font-joseph-sans bg-[#E7F1FE] mb-[1rem]"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="text-end">
        <span className="text-white font-joseph-sans cursor-pointer text-sm">
          Cant Find Your Utility Company?
        </span>
      </div>

      <div className="flex flex-col items-end mt-5">
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={e => setFormState("authorize")}>
          Continue {"->"}
        </button>
      </div>
    </div>
  );
};

export default UtilityProvider;
