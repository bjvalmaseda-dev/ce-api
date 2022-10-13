import { Schema, model } from "mongoose";

export interface ITask {
  content: string;
}

const taskSchema = new Schema<ITask>({
  content: { type: String, required: true },
});

const Task = model("Task", taskSchema);

export default Task;
