import { dbConfig } from "@/utils/dbConfig";
import photoModel from "@/utils/model/labModel";
import userModel from "@/utils/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;

    const userImages = await userModel.findById(userID).populate({
      path: "lab",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Getting personal images",
      data: userImages,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error getting personal images",
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const { name, imageURL, imageID } = await req.json();

    const userImages = await userModel.findById(userID);

    if (userImages) {
      if (userImages.plan === "Free" && userImages.lab.length < 5) {
        const photo = await photoModel.create({ name, imageURL, imageID });

        userImages?.lab?.push(new Types.ObjectId(photo._id));
        userImages?.save();

        return NextResponse.json({
          status: 201,
          message: "creating personal images",
          data: photo,
        });
      } else if (userImages.plan === "Starter" && userImages.lab.length < 10) {
        const photo = await photoModel.create({ name, imageURL, imageID });

        userImages?.lab?.push(new Types.ObjectId(photo._id));
        userImages?.save();

        return NextResponse.json({
          status: 201,
          message: "creating personal images",
          data: photo,
        });
      } else if (userImages.plan === "Premium") {
        const photo = await photoModel.create({ name, imageURL, imageID });

        userImages?.lab?.push(new Types.ObjectId(photo._id));
        userImages?.save();

        return NextResponse.json({
          status: 201,
          message: "creating personal images",
          data: photo,
        });
      } else {
        return NextResponse.json({
          status: 401,
          message: "To upload more imgaes, please up-grade your plan",
        });
      }
    } else {
      return NextResponse.json({
        status: 401,
        message: "unable to create personal images",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error getting personal images",
    });
  }
};
