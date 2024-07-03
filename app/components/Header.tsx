"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const session = useSession();

  console.log(session);
  return (
    <div className="flex justify-center border-b h-[60px] w-full">
      <div className="flex items-center justify-between w-[90%]">
        <Link href="/">
          <p>Logo</p>
        </Link>
        {!session.data ? (
          <div className="flex gap-2">
            <Link href="/signin">
              <button
                className={`bg-blue-950 uppercase font-semibold
              text-white flex justify-center items-center rounded-md px-6 py-3 text-[12px]`}
              >
                Log in
              </button>
            </Link>

            <Link href="/register">
              <button
                className={`bg-neutral-900 uppercase font-semibold
              text-white flex justify-center items-center rounded-md px-6 py-3 text-[12px]`}
              >
                Register
              </button>
            </Link>
          </div>
        ) : (
          <button
            className={`bg-neutral-900 uppercase font-semibold
              text-white flex justify-center items-center rounded-md px-6 py-3 text-[12px]`}
            onClick={() => {
              signOut();
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
