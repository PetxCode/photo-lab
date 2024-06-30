import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const user = await userModel.findOne({
      email,
    });

    if (user) {
      const passCheck = await bcrypt.compare(password, user?.password);

      if (passCheck) {
        return NextResponse.json({
          message: "users login...",
          status: 201,
          data: user,
        });
      } else {
        return NextResponse.json({
          message: "error with user password",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "error with user email",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "error creating user",
      status: 404,
    });
  }
};
