import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/user";
import productsRouter from "./routes/products";
import cartRouter from "./routes/cart";
import accessRouter from "./routes/access";
import authMiddleware from "./middleware/auth";
import { CLIENT_URL, PORT } from "./config";

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/cart", authMiddleware, cartRouter);
app.use("/access", authMiddleware, accessRouter);

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});
