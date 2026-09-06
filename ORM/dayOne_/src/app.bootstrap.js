import express from "express";
import { syncFun } from "./database/connectDB.js";
import { userRouter } from "./modules/user/user.controller.js";
const app = express();
const port = 3000;

function bootstrap() {
  syncFun();
  app.use("/users", userRouter);
  app.use(express.json());

  app.get("/", (req, res) => {
    return res.status(200).json({ msg: "welcome to my server" });
  });

  app.all("{/*dummy}", (req, res) => {
    res
      .status(404)
      .json({ msg: `the url : ${req.originalUrl} not valid`, statusCode: 404 });
  });

  app.listen(port, () => {
    console.log(`server is runnig at port : ${port}`);
  });
}

export default bootstrap;
