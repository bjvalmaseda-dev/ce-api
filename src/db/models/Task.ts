import { Schema, model } from "mongoose";

export interface ITask {
  content: string;
}

const taskSchema = new Schema<ITask>({
  content: { type: String, required: true },
});

taskSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = model("Task", taskSchema);

export default Task;
