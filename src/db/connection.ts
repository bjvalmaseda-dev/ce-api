import mongoose from "mongoose";

const { MONGO_DB_URI, NODE_ENV, MONGO_DB_URI_TEST } = process.env;

let dbUri: string;
if (NODE_ENV === "test") {
  dbUri = MONGO_DB_URI_TEST || "mongodb://localhost:27017/tasks_app_test";
} else {
  dbUri = MONGO_DB_URI || "mongodb://localhost:27017/tasks_app";
}

export const connectDB = () => {
  mongoose
    .connect(dbUri)
    .then(() => console.info("[database]: Database is connected"))
    .catch((err) => console.error(err));
};

process.on("uncaughtException", () => {
  mongoose.connection.close();
});

export default mongoose;
