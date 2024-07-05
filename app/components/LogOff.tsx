"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { MdLogout } from "react-icons/md";

const LogOff = () => {
  return (
    <div
      className="flex gap-3 items-center mb-5 border rounded-md py-3 px-3 cursor-pointer hover:border-blue-950 hover:border transition-all duration-300"
      onClick={() => {
        signOut();
      }}
    >
      <MdLogout size={20} />
      <button className="text-[12px] font-bold">Log Out</button>
    </div>
  );
};

export default LogOff;
