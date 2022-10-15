import { IRouter, Request, Response, Router } from "express";
import Task from "../db/models/Task";

const testingRouter: IRouter = Router();

testingRouter.delete("/_clean", async (req: Request, res: Response) => {
  const tasks = await Task.deleteMany({});
  res.status(204).end();
});

export default testingRouter;
