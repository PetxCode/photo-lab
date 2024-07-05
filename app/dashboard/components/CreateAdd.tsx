"use client";

import { ContextProvider } from "@/app/global/GlobalContext";
import React, { useContext } from "react";
import { MdCreateNewFolder } from "react-icons/md";

const CreateAdd = () => {
  const { setToggle }: any = useContext(ContextProvider);
  return (
    <div
      className="my-2 border border-slate-50 rounded-md pl-2 cursor-pointer uppercase text-[12px] font-semibold flex items-center gap-2 py-3 mt-10 
          hover:bg-blue-950 hover:text-white transition-all duration-300
          "
      onClick={() => {
        setToggle(true);
      }}
    >
      <MdCreateNewFolder />
      Add Photo{" "}
    </div>
  );
};

export default CreateAdd;
