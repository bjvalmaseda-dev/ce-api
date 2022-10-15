import { Request, Response, NextFunction } from "express";

const ERROR_HANDLER: Record<string, (res: Response, err?: any) => void> = {
  CastError: (res) => res.status(400).json({ error: "id used is malformed" }),

  ValidationError: (res: Response, err: Error) =>
    res.status(409).json({ error: err.message }),

  default: (res: Response) => res.status(500).end(),
};

const errorsHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const handler = ERROR_HANDLER[error.name] || ERROR_HANDLER["default"];
  handler(res, error);
};

export default errorsHandler;
