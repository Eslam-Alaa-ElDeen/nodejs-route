import express from "express";
import { connectDB } from "./DB/connection.db.js";
import { authRouter, productRouter, userRouter } from "./modules/index.js";
import { golbalErrorHandler } from "./middleware/index.js";

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("welcome to my website");
});

app.all("{/*dummy}", (req, res) => {
  res.status(404).json({ msg: "Page not found" });
});

app.use(golbalErrorHandler);

connectDB().catch((error) => {
  console.error("Database connection error:", error.message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
