import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://kennethoshogwe2:ORvShSK7FfIo2Xov@cluster0.ldkoji3.mongodb.net/?
