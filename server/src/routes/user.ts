import express from "express";
import { v4 as uuid } from "uuid";
import { users, carts } from "../database";
import authMiddleware from "../middleware/auth";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  const id = req.cookies["id"];
  const user = users[id];
  res.send(user);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  const existedUser = Object.values(users).find((user) => user.name === name);

  if (existedUser) {
    res.cookie("id", existedUser.id);
    res.send(existedUser);
  }

  const cartId = uuid();
  const userId = uuid();
  carts[cartId] = {
    owner: name,
    data: {},
  };
  const user = {
    id: userId,
    name,
    cartId,
  };
  users[userId] = user;
  res.cookie("id", userId, { httpOnly: true });
  res.send(user);
});

export default router;
