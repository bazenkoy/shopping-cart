import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.id) {
    res.status(401).send({ error: "Unauthorized" });
    return;
  }

  next();
};

export default authMiddleware;
