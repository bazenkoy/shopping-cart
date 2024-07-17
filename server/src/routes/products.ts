import express from "express";
import { products } from "../database";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(products);
});

export default router;
