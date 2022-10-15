import { ITask } from "../../db/models/Task";
import supertest from "supertest";
import { app } from "../../index";
const api = supertest(app);

const initialTask: ITask[] = [
  {
    content: "Task 1",
  },
  {
    content: "Task 2",
  },
];

const getAllTasks = async () => {
  const response = await api.get("/api/tasks");

  return {
    contents: response.body.map(
      (tasks: { content: string; id: string }) => tasks.content
    ),
    response,
  };
};

export { initialTask, api, getAllTasks };
