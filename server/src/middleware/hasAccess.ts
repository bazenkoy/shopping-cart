import { Request, Response, NextFunction } from "express";
import { access, users } from "../database";

const hasAccess = (req: Request, res: Response, next: NextFunction) => {
  const id = req.cookies.id;
  const cartId = req.params.cartId;
  const isUserCart = users[id]?.cartId === cartId;
  const userAccess = access[id]?.some((item) => item === cartId);

  if (isUserCart || userAccess) {
    next();
  }

  res.status(400).send({ error: "Permission denied" });
};

export default hasAccess;
