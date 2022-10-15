import Task, { ITask } from "../db/models/Task";
import { server } from "../index";
import mongoose, { connectDB } from "../db/connection";
import { api, initialTask, getAllTasks } from "./helpers";
import supertest from "supertest";

it("API is running", () => {
  api.get("/").expect(200);
});

describe("Tasks", () => {
  beforeEach(async () => {
    await Task.deleteMany({});
    const noteObjects = initialTask.map((task) => new Task(task));
    const promises = noteObjects.map((task) => task.save());
    await Promise.all(promises);
  });

  it("GET api/tasks", async () => {
    const response = await api.get("/api/tasks");
    expect(response.body).toHaveLength(initialTask.length);
  });

  describe("POST /api/tasks", () => {
    it("valid task can be saved", async () => {
      const newTask: ITask = { content: "New task from jest" };
      await api.post("/api/tasks").send(newTask).expect(201);

      const { contents, response } = await getAllTasks();
      expect(response.body).toHaveLength(initialTask.length + 1);
      expect(contents).toContain("New task from jest");
    });

    it("not content task can't be save", async () => {
      await api.post("/api/tasks").send({ content: "" }).expect(400);

      const { contents, response } = await getAllTasks();
      expect(response.body).toHaveLength(initialTask.length);
    });
  });

  describe("PUT /api/tasks", () => {
    it("a task ca be updated", async () => {
      const updatedTask: ITask = { content: "Task update from jest" };

      const { response: responseStart } = await getAllTasks();
      const taskToUpdate = responseStart.body[0];

      await api
        .put(`/api/tasks/${taskToUpdate.id}`)
        .send(updatedTask)
        .expect(200);

      const { contents: contentsUpdated } = await getAllTasks();
      expect(contentsUpdated).toContain(updatedTask.content);
    });

    it("not found error if the id is malformed", async () => {
      await api.delete(`/api/tasks/badId`).expect(400);
    });
  });

  describe("DELETE /api/tasks", () => {
    it("a task ca be delete", async () => {
      const { response: responseStart } = await getAllTasks();
      const taskToDelete = responseStart.body[0];

      await api.delete(`/api/tasks/${taskToDelete.id}`).expect(204);

      const { contents } = await getAllTasks();
      expect(contents).toHaveLength(initialTask.length - 1);
      expect(contents).not.toContain(taskToDelete.content);
    });

    it("not found error if the id is malformed", async () => {
      await api.delete(`/api/tasks/badId`).expect(400);
    });
  });
});

describe("Testing", () => {
  it("the database is clean", async () => {
    await api.delete("/api/testing/_clean").expect(204);
    const { contents, response } = await getAllTasks();
    expect(contents).toHaveLength(0);
  });
});

afterAll(async () => {
  server.close();
  mongoose.disconnect();
});
