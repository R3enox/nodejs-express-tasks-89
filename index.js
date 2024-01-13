const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/tasks", (req, res) => {
  res.send("get tasks");
});

app.post("/tasks", (req, res) => {
  res.send("post tasks");
});
