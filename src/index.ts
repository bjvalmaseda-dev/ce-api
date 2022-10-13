require("dotenv").config();
require("./db/connection");
import express, { Request, Response, Express } from "express";

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.info(`[server]: Server is running at port:${PORT}`);
});
