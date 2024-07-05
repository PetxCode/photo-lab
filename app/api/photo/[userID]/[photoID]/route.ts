import { dbConfig } from "@/utils/dbConfig";
import photoModel from "@/utils/model/labModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { photoID } = params;

    await photoModel.findByIdAndDelete(photoID);

    return NextResponse.json({
      status: 200,
      message: "Deleting personal images",
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error getting personal images",
    });
  }
};
