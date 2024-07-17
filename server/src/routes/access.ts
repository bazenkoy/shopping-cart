import express from "express";
import { access, users, carts } from "../database";
import { cardProductAdapter } from "../utils";
import { User } from "../types";

const router = express.Router();

router.get("/", (req, res) => {
  const id = req.cookies["id"];
  const cartWithAccess = access[id];
  if (!cartWithAccess?.length) {
    res.send([]);
  }
  const result = cartWithAccess.map((cartId) =>
    cardProductAdapter(carts[cartId], cartId)
  );

  res.send(result);
});

router.post("/:shareWith", (req, res) => {
  const id = req.cookies["id"];
  const me = users[id];
  const userName = req.params.shareWith;
  const user = Object.values(users).find((u) => u.name === userName) as User;
  if (!user) {
    res.status(400).send({ error: "User doesn't exist" });
  }
  const withAccess = access[user.id] || [];
  access[user.id] = Array.from(new Set([...withAccess, me.cartId]));

  res.send({ success: true });
});

export default router;
