"use client";

import { ContextProvider } from "@/app/global/GlobalContext";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";

const Close = () => {
  const { toggle, setToggle }: any = useContext(ContextProvider);
  return (
    <div
      className="w-10 h-10 rounded-full text-[20px] flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-red-500 cursor-pointer transition-all duration-300"
      onClick={() => {
        setToggle(false);
      }}
    >
      <MdClose />
    </div>
  );
};

export default Close;
