import { iData } from "@/utils/interface";
import { registerData } from "@/utils/registerData";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-slate-50 ">
      <Link href="/">
        <div className="my-4  font-semibold uppercase text-[12px]">
          Go Back Home
        </div>
      </Link>
      <div className="flex gap-4">
        {registerData?.map((props: iData) => (
          <Link
            href={props.url}
            key={props.id}
            className="flex flex-col min-h-[300px] rounded-md border w-[250px] p-4 bg-white shadow-sm"
          >
            <p className="uppercase font-semibold pb-5 border-b">
              {props.name}
            </p>
            <p className="uppercase font-semibold my-5 flex-1">{props.price}</p>

            <button
              className={`${
                props.name === "Free"
                  ? "bg-blue-950"
                  : props.name === "Starter"
                  ? "bg-red-500"
                  : props.name === "Premium"
                  ? "bg-purple-900"
                  : null
              } text-white w-full h-[55px] flex justify-center items-center rounded-md`}
            >
              Register for {props.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
