import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kennethoshogwe2:ORvShSK7FfIo2Xov@cluster0.ldkoji3.mongodb.net/food-del"
    )
    .then(() => console.log("db connected"));
};
