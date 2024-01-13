const fs = require("fs/promises");
const path = require("path");

const taskPath = path.join(__dirname, "./tasks.json");



const listTasks = async () => {
  const data = await fs.readFile(taskPath);
  return JSON.parse(data);
};

const writeTask = (tasks) => fs.writeFile(taskPath, JSON.stringify(tasks));

module.exports = {
  listTasks,
  writeTask,
};
