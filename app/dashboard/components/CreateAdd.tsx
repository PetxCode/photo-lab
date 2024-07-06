import Link from "next/link";
import React, { useContext } from "react";
import { MdCreateNewFolder } from "react-icons/md";

const CreateAdd = () => {
  return (
    <Link href="/dashboard/create">
      <div
        className="my-2 border border-slate-50 rounded-md pl-2 cursor-pointer uppercase text-[12px] font-semibold flex items-center gap-2 py-3 mt-10 
          hover:bg-blue-950 hover:text-white transition-all duration-300
          "
      >
        <MdCreateNewFolder />
        Add Photo{" "}
      </div>
    </Link>
  );
};

export default CreateAdd;
