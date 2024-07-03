"use client";
import { iData } from "@/utils/interface";
import { registerData } from "@/utils/registerData";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { makePayment } from "./paymentAction";
import { redirect } from "next/navigation";
import { ContextProvider } from "@/app/global/GlobalContext";

const page = ({ params }: any) => {
  const { registrationName } = params;

  const {
    urlPath,
    setUrlPath,
    email,
    setEmail,
    password,
    setPassword,
    companyName,
    setCompanyName,
    refNumb,
    setRefNumb,
    plan,
    setPlan,
  }: any = useContext(ContextProvider);

  const planValue: string = registrationName
    .charAt(0)
    .toUpperCase()
    .concat(registrationName.slice(1));

  const data = registerData.find((el: iData) => {
    return el.name === planValue;
  });

  const processToPay = async (formData: FormData) => {
    // "use server";
    try {
      const companyName = formData.get("companyName") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      await makePayment(email, data?.price!)
        .then((res: any) => {
          console.log(res?.data.data);
          console.log(res?.data.data.authorization_url);

          setPassword(password);
          setEmail(email);
          setCompanyName(companyName);
          setPlan(planValue);
          setRefNumb(res?.data.data.reference);

          setUrlPath(res?.data.data.authorization_url);
          window.location.assign(res?.data.data.authorization_url);
        })
        .finally(() => {});
    } catch (error) {
      console.error(error);
    }
  };
  localStorage.setItem(
    "data",
    JSON.stringify({
      urlPath,
      email,
      password,
      refNumb,
      plan,
      companyName,
    })
  );

  return (
    <div className="flex w-full h-screen items-center justify-center ">
      <div className="p-4 border rounded-md w-[350px] min-h-[400px]">
        <p className="uppercase font-medium pb-6 border-b mb-3">
          Registering for {planValue}: ₦{data?.price.toLocaleString()}
        </p>

        <form action={processToPay}>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Name</label>
            <input
              name="companyName"
              className="border rounded-md outline-none h-[45px] px-2"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              name="email"
              className="border rounded-md outline-none h-[45px] px-2"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              name="password"
              className="border rounded-md outline-none h-[45px] px-2"
              placeholder="Password"
              type="password"
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-950
              text-white w-full h-[55px] flex justify-center items-center rounded-md`}
          >
            Process to Register
          </button>
        </form>
        <div className="text-center my-2 text-[12px]">
          Aleader have an Account{" "}
          <Link href="/signin" className="font-semibold italic">
            Log in Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
