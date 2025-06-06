import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";

dotenv.config();

const app = express();

// to make input as json
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("====================================");
  console.log("Server is running on port 3000.~~~".bold.bgMagenta);
  console.log("====================================");
});
