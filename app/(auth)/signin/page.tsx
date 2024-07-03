"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const signinAction = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", { email, password });
  };
  return (
    <div className="flex w-full h-screen items-center justify-center ">
      <div className="p-4 border rounded-md w-[350px] h-[330px]">
        <p className="uppercase font-medium pb-6 border-b mb-3">Signing in</p>

        <form action={signinAction}>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              name="email"
              className="border rounded-md outline-none h-[45px] px-2"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              name="password"
              className="border rounded-md outline-none h-[45px] px-2"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-950
              text-white w-full h-[55px] flex justify-center items-center rounded-md`}
          >
            Process to Dashboard
          </button>
        </form>
        <div className="text-center my-2 text-[12px]">
          Don't have an Account{" "}
          <Link href="/register" className="font-semibold italic">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
