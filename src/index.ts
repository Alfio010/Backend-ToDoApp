import express from "express";
import sequlize from "./database";
import todoRouter from "./endpoint/todo_query";
import { Todo } from "./models/Todo";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use("/todo", todoRouter);

app.get("/ping", async (_req, res) => {
  console.log("ping");
  res.json({ ciao: "ping" });
});

async function creaDatabase() {
  try {
    await sequlize.sync({ alter: true });
    await Todo.sync({ alter: true });
  } catch (err: any) {
    console.error(err);
  }
}

sequlize
  .authenticate()
  .then(async () => {
    console.log("Database connected");

    await creaDatabase();
  })
  .catch((e: any) => {
    console.log(e.message);
  });

app.listen(port, "0.0.0.0", () => {
  console.log(`App runing at http://localhost:` + port);
});
