import { connect } from "mongoose";
import { DB } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(DB).then(() => {
      console.clear();
      console.log("DB connected 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
