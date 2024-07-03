"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  createAccount,
  verifyPayment,
} from "../register/[registrationName]/paymentAction";
import { useSearchParams } from "next/navigation";

const page = () => {
  const getRef = useSearchParams();
  const referenceVaue = getRef.get("reference");

  const [data, setData] = useState(JSON.parse(localStorage?.getItem("data")!));

  console.log(data);

  console.log(referenceVaue);
  useEffect(() => {
    verifyPayment(data?.refNumb).then((res) => {
      if (res?.data.data.status) {
        createAccount(
          data?.companyName,
          data?.email,
          data?.password,
          data?.plan
        ).then((res) => {
          console.log(res);
        });
      } else {
        console.log("something when wrong");
      }
    });
  }, []);

  return (
    <div className="flex w-full h-screen items-center justify-center ">
      <div className="p-4 border rounded-md w-[350px] min-h-[100px]">
        <p className="uppercase font-medium pb-6 border-b mb-3">
          Confirmation of Payment
        </p>

        <form>
          <Link href="/signin">
            <button
              className={`bg-blue-950
              text-white w-full h-[55px] flex justify-center items-center rounded-md`}
            >
              Process to Sign in
            </button>
          </Link>
        </form>
        <div className="text-center my-2 text-[12px]">
          This is a confirmation of your{" "}
          <Link href="/signin" className="font-semibold italic">
            Account Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
