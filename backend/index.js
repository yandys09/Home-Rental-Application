import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import colors from "colors";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB.~~~".italic.bold.bgCyan);
    console.log("====================================".red);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// to make input as json
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("====================================".red);
  console.log("Server is running on port 3000.~~~".italic.bold.bgMagenta);
});

import authRoutes from "./routes/auth.route.js";

app.use("/api/auth", authRoutes);
