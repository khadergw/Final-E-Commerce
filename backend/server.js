import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*to get the details of a product */
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => {
    return Number(x._id) === Number(req.params.id);
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Server is Listening!");
});
/*to get the list of the products */
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
/*display error */
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to Mongodb");
    return app.listen(port);
  })
  .then(() => {
    console.log(`Serve at http://localhost:${port}`);
  });