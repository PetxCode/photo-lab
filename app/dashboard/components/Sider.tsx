"use client";

import LogOff from "@/app/components/LogOff";
import React, { useContext } from "react";
import { MdFavorite, MdPersonAdd, MdPhotoAlbum } from "react-icons/md";
import CreateAdd from "./CreateAdd";
import { ContextProvider } from "@/app/global/GlobalContext";
import Modal from "./Modal";

const Sider = () => {
  const navData = [
    {
      id: 1,
      url: "/dashboard",
      title: "all photos",
      icon: <MdPhotoAlbum />,
    },
    {
      id: 2,
      url: "/dashboard/dashboard",
      title: "dashboard",
      icon: <MdFavorite />,
    },
    {
      id: 3,
      url: "/dashboard",
      title: "Best photos",
      icon: <MdPersonAdd />,
    },
  ];

  const { toggle, setToggle }: any = useContext(ContextProvider);

  console.log(toggle);
  return (
    <div className="relative">
      {toggle && (
        <div className=" absolute z-10 h-screen  w-[100vw] backdrop-blur-sm">
          <Modal />
        </div>
      )}
      <div className="w-[250px] border-r h-[100vh] flex flex-col bg-slate-50 px-2">
        <div className={`pt-10 flex gap-2 mb-20`}>
          <div className="w-16 h-16 rounded-full border flex justify-center items-center font-bold ">
            P
          </div>
          <div>
            <p className="font-semibold uppercase text-[14px]">name</p>

            <p className="text-[12px] mt-3">Plan: </p>

            <button className="bg-blue-950 text-white rounded-sm py-2 px-5 text-[12px] font-semibold">
              Upgrade Plan
            </button>
          </div>
        </div>

        <div>
          {navData.map((props: any) => (
            <div
              key={props.id}
              className="my-2 border border-slate-50 rounded-md py-3 pl-2 cursor-pointer uppercase text-[12px] font-semibold flex items-center gap-2 flex-1
          hover:bg-blue-950 hover:text-white transition-all duration-300
          "
            >
              <div className="text-[18px]">{props.icon}</div>
              <div>{props?.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <hr />
        </div>

        <CreateAdd />
        <div className="flex-1" />
        <LogOff />
      </div>
    </div>
  );
};

export default Sider;
