import { port } from "../config/config.service.js";
import { GenderEnum } from "./common/enum/user.enum.js";
import { connectionDB } from "./DB/connection.db.js";
import { userModel } from "./DB/model/user.model.js";
import { globalErrorHandling } from "./middleware/index.js";
import {userRouter } from "./modules/index.js";
import express from "express";


const app = express();

app.use(express.json());

await connectionDB();


console.log(Object.values(GenderEnum));

app.get("/", (req, res) => res.send("welcome to Eslam_3laa server"));

app.use("/user", userRouter);


app.use("{/*dummy}", (req, res) => {
  return res.status(404).json({ message: "Invalid application routing" });
});


app.use(globalErrorHandling);

app.listen(port, () => console.log(`app listening on port ${port}!`));
