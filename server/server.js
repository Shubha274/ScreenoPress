import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import sellerRouter from "./routes/sellerRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import addressRouter from "./routes/addressRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = [
  "http://localhost:5173", // local frontend (dev)
  "https://screeno-press-frontend.vercel.app", // deployed frontend (prod)
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Request Origin:", origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

//url of origin
(async () => {
  try {
    await connectDB();
    await connectCloudinary();
    //Middleware configuration
    app.use(express.json());

    app.use(cookieParser());
    app.get("/", (req, res) => res.send("API is working"));
    app.use("/api/user", userRouter);
    app.use("/api/seller", sellerRouter);
    app.use("/api/product", productRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/address", addressRouter);
    app.use("/api/order", orderRouter);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1); // Exit on failure
  }
})();
