import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session: any = await getServerSession(options);

  console.log(session);
  return (
    <div>
      <div>This is the main Dashboard Page</div>

      <div>Welcome back {session?.user.name}</div>
    </div>
  );
};

export default page;
