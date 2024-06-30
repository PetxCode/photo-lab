import { Types } from "mongoose";
import { Schema, models, model } from "mongoose";
import { iUserData } from "../interface";

const userData = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    plan: {
      type: String,
    },
    planCost: {
      type: Number,
    },
    lab: [
      {
        type: Types.ObjectId,
        ref: "Labs",
      },
    ],
  },
  { timestamps: true }
);

const userModel = models.Users || model<iUserData>("Users", userData);

export default userModel;
