const express = require("express");
const { getTasks } = require("../controller/tasksController");

const router = express.Router()

router.get("/", getTasks);

module.exports = router;