"use client";

import React, { createContext, FC, ReactNode, useState } from "react";

interface iContext {
  children: ReactNode;

  setRefNumb?: React.Dispatch<React.SetStateAction<string>>;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPlan?: React.Dispatch<React.SetStateAction<string>>;
  setUrlPath?: React.Dispatch<React.SetStateAction<string>>;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;

  toggle?: boolean;
  urlPath?: string;
  refNplanumb?: string;
  refNumb?: string;
  email?: string;
  password?: string;
  companyName?: string;
}

export const ContextProvider = createContext({});

export const GlobalContext: FC<iContext> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [refNumb, setRefNumb] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [urlPath, setUrlPath] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ContextProvider.Provider
      value={{
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
        toggle,
        setToggle,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
