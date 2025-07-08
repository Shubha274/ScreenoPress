import mongoose from "mongoose";
import "dotenv/config";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error.message);
  }
};
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       `${process.env.MONGO_URI}/screenographix`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection FAILED:", error.message);
//     process.exit(1); // Stop app if DB fails
//   }
// };

export default connectDB;
