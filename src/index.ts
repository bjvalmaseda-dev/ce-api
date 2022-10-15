require("dotenv").config();
import express, { Request, Response, Express } from "express";
import cors from "cors";
import taskRouter from "./controller/task";
import testingRouter from "./controller/testing";
import errorsHandler from "./middlewares/errorsHandler";
import { connectDB } from "./db/connection";
import notFound from "./middlewares/notFound";

const app: Express = express();
const PORT = process.env.PORT || 3001;

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

app.use("/api/tasks", taskRouter);

if (process.env.NODE_ENV === "test") {
  app.use("/api/testing", testingRouter);
}

app.use(notFound);
app.use(errorsHandler);

const server = app.listen(PORT, () => {
  console.info(`[server]: Server is running at port:${PORT}`);
});

export { app, server };
