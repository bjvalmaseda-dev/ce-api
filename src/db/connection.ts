import mongoose from "mongoose";

const { MONGO_DB_URI } = process.env;

const dbUri = MONGO_DB_URI || "mongodb://localhost:27017/tasks_app";

mongoose
  .connect(dbUri)
  .then(() => console.info("[database]: Database is connected"))
  .catch((err) => console.error(err));

process.on("uncaughtException", () => {
  mongoose.connection.close();
});
