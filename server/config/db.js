import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
<<<<<<< HEAD
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(process.env.mongo_url);
  } catch (error) {
    console.error(error.message);
=======
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is undefined");

    await mongoose.connect(uri);

    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
>>>>>>> main
  }
};

export default connectDB;
