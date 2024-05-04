import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://kennethoshogwe2:ORvShSK7FfIo2Xov@cluster0.ldkoji3.mongodb.net/?
