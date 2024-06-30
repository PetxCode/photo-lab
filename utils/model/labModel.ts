import { Types } from "mongoose";
import { Schema, models, model } from "mongoose";
import { iPhotoData } from "../interface";

const photoData = new Schema<iPhotoData>(
  {
    name: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    imageID: {
      type: String,
    },

    user: {
      type: Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const photoModel = models.Labs || model<iPhotoData>("Labs", photoData);

export default photoModel;
