import mongoose from "mongoose";
export const ConnectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database is connected");
    });
    connection.on("error", () => {
      console.log("Database is not connected");
    });
  } catch (error: any) {
    console.log("Connection faild....");
  }
};
