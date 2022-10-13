require("dotenv").config();
require("./db/connection");
import express, { Request, Response, Express } from "express";
import taskRouter from "./controller/task";

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.info(`[server]: Server is running at port:${PORT}`);
});
