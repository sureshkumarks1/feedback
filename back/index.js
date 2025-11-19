const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./router/feedbackroute")

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((err) => console.error(err));



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api",userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});