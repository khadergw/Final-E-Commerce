import express from "express";
import data from '../data.js';
import User from "../models/userModel.js";
import expressAsyncHandler from 'express-async-handler';
const userRouter = express.Router(); // allows multiple files to have the routers instead of only one file
userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
console.log("seeding_users");
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);
export default userRouter;