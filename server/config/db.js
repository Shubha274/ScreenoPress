import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(`${process.env.mongo_url}/screenographix`);
  } catch (error) {
    console.error(error.message);
  }
};
export default connectDB;
