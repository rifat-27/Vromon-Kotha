import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes.js";
import postRouter from "./routing/post-routes.js";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
mongoose
  .connect(
    `mongodb+srv://rifat27:${process.env.MONGODB_PASSWORD}@cluster0.2lzjznv.mongodb.net/?retryWrites=true&w=majority` )
  .then(() =>
    app.listen(5000, () =>
      console.log('Connection Succesfull  & Listening to localhost Port 5000')
    )
  )
  .catch((err) => console.log(err))
