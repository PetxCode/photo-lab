import { dbConfig } from "@/utils/dbConfig";
import photoModel from "@/utils/model/labModel";
import userModel from "@/utils/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { photoID, userID } = params;

    const user = await userModel.findById(userID);

    if (user) {
      await photoModel.findByIdAndDelete(photoID);

      user?.lab?.pull(new Types.ObjectId(photoID));
      user?.save();

      return NextResponse.json({
        status: 201,
        message: "Deleting personal images",
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Error getting user",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error getting personal images",
    });
  }
};
