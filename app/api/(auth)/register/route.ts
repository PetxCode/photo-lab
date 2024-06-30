import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async () => {
  try {
    await dbConfig();

    const user = await userModel.find();

    return NextResponse.json({
      message: "Reading users...",
      status: 200,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error reading user",
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password, planData } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    let plan: string = "";
    let cost: number = 0;

    if (planData === "Free") {
      plan = "Free";
      cost = 0;
    } else if (planData === "Starter") {
      plan = "Starter";
      cost = 500;
    } else if (planData === "Premium") {
      plan = "Premium";
      cost = 1000;
    }

    const user = await userModel.create({
      name,
      email,
      password: hashed,
      plan,
      planCost: cost,
    });

    return NextResponse.json({
      message: "Reading users...",
      status: 201,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error creating user",
      status: 404,
    });
  }
};
