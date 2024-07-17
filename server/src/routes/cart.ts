import express from "express";
import { carts } from "../database";
import { cardProductAdapter } from "../utils";
import hasAccess from "../middleware/hasAccess";

const router = express.Router();

router.get("/:cartId", hasAccess, (req, res) => {
  const cartId = req.params.cartId;
  const cart = carts[cartId];
  if (!cart) {
    res.status(400).send({ error: "Something went wrong" });
  }
  const response = cardProductAdapter(cart, cartId);
  res.send(response);
});

router.delete("/:cartId", hasAccess, (req, res) => {
  const cartId = req.params.cartId;
  carts[cartId].data = {};
  res.send({ success: true });
});

router.post("/:cartId/:productId", hasAccess, (req, res) => {
  const cartId = req.params.cartId;
  const productId = req.params.productId;
  const cart = carts[cartId];
  cart.data[productId] = (cart.data[productId] || 0) + 1;
  res.send({ success: true });
});

router.delete("/:cartId/:productId", hasAccess, (req, res) => {
  const cartId = req.params.cartId;
  const productId = req.params.productId;
  const cart = carts[cartId];
  if (cart.data[productId] > 1) {
    cart.data[productId] = cart.data[productId] - 1;
  } else {
    delete cart.data[productId];
  }
  res.send({ success: true });
});

export default router;
