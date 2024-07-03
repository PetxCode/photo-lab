import { iData } from "./interface";

export const registerData: iData[] = [
  {
    id: 1,
    name: "Free",
    url: "/register/free",
    price: 0,
    benefit: [],
  },
  {
    id: 2,
    name: "Starter",
    url: "/register/starter",
    price: 500,
    benefit: ["all of Free", "More", "More", "and More"],
  },
  {
    id: 3,
    name: "Premium",
    url: "/register/premium",
    price: 1000,
    benefit: ["all of Starter", "More", "More", "and More"],
  },
];
