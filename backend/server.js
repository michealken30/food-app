import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

// // Basic health check to see if the server is running
// app.get("/healthz", (req, res) => {
//   res.status(200).send("Healthy");
// });

// let lastReadyState = null;
// // Readiness check to see if the server is ready to serve requests
// app.get("/ready", (req, res) => {
//   // Here you can add logic to check database connection or other dependencies
//   const isDbConnected = mongoose.connection.readyState === 1;
//   if (isDbConnected !== lastReadyState) {
//     console.log(`Database readyState: ${mongoose.connection.readyState}`);
//     lastReadyState = isDbConnected;
//   }

//   if (isDbConnected) {
//     res.status(200).send("Ready");
//   } else {
//     res.status(503).send("Not Ready");
//   }
// });

// // Startup check to ensure the server has started correctly
// app.get("/started", (req, res) => {
//   // Assuming the server has started correctly if this endpoint is reachable
//   res.status(200).send("Started");
// });

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
