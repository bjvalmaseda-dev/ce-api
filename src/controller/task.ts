import {
  IRouter,
  NextFunction,
  Request,
  Response,
  Router,
  RouterOptions,
} from "express";

import Task from "../db/models/Task";

const taskRouter: IRouter = Router();

taskRouter.get("/", async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

taskRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;

    if (!content) res.status(400).json({ error: "Bad request" });

    try {
      const newTask = new Task({ content });
      const task = await newTask.save();
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
);

taskRouter.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = req.body;

  const updateTask = { content: task.content };

  try {
    const taskUpdated = await Task.findByIdAndUpdate(id, updateTask, {
      new: true,
    });
    res.json(taskUpdated);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});

taskRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});

export default taskRouter;
