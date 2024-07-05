"use client";

import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";
import Header from "./components/Header";

interface iLayout {
  children: ReactNode;
}

const MainLayout: FC<iLayout> = ({ children }) => {
  const path = usePathname();

  console.log(path);

  if (path === "/dashboard") {
    return <div>{children}</div>;
  } else if (path === "/register") {
    return <div>{children}</div>;
  } else if (path === "/signin") {
    return <div>{children}</div>;
  }
  if (path === "/register/starter") {
    return <div>{children}</div>;
  } else if (path === "/register/free") {
    return <div>{children}</div>;
  } else if (path === "/register/premium") {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <Header />
        <div>{children}</div>
      </div>
    );
  }
};

export default MainLayout;
