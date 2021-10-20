const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routers/AuthRouter");
app.use(express.json());
dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("App Connected to Db"))
  .catch((err) => console.log(err));

app.use("/api/auth", userRouter);

app.listen(5001, () => console.log("App listening on port 5001"));
