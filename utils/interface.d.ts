import { Document } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  password: string;
  lab: {}[];
  plan: string;
  planCost: number;
}

export interface iUserData extends iUser, Document {}

export interface iPhoto {
  name: string;
  imageURL: string;
  imageID: string;
  user: {};
}

export interface iPhotoData extends iPhoto, Document {}
