"use client";

import { ContextProvider } from "@/app/global/GlobalContext";
import React, { useContext } from "react";
import { MdClose, MdPhotoAlbum } from "react-icons/md";

const Modal = () => {
  const { toggle, setToggle }: any = useContext(ContextProvider);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[400px] border rounded-md min-h-[200px] p-4">
        <p className="pb-5 mb-5 border-b w-full uppercase text-[12px] font-semibold flex justify-between items-center">
          <div> Adding up new Memory</div>
          <div
            className="w-10 h-10 rounded-full text-[20px] flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-red-500 cursor-pointer transition-all duration-300"
            onClick={() => {
              setToggle(false);
            }}
          >
            <MdClose />
          </div>
        </p>

        <form>
          <div className="flex gap-3 items-center w-full">
            <div className="flex flex-col flex-1">
              <label className="text-[12px] font-semibold">
                Title this Memo
              </label>
              <input
                placeholder="Title your Memory"
                type="text"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <div>
              <label htmlFor="image" className="text-[45px] cursor-pointer">
                <MdPhotoAlbum />
              </label>

              <input type="file" id="image" className="hidden" />
            </div>
          </div>
          <button
            className="flex items-center justify-center w-full h-[55px] bg-blue-950 text-white mt-5 rounded-md"
            onClick={() => {
              setToggle(false);
            }}
          >
            Create Memory
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
