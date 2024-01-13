const express = require("express");
const tasksRouter = require("./routes/taskRouter")

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/tasks", tasksRouter);

app.use((err, req, res, next) => {
   const {status= 500} = err;
  res.status(status).json(err);
 
});

// app.get("/tasks", (req, res) => {
//   res.send("get tasks");
// });

// app.post("/tasks", (req, res) => {
//   res.send("post tasks");
// });
