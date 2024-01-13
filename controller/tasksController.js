const { listTasks } = require("../models/tasks");

const getTasks = async (req, res, next) => {
    try {
    //    const tasks = await listTasks();
    const tasks = []
       if( tasks.length === 0) {
        return res.status(200).send({message: " database is empty"})
       }
       res.send(tasks); 

    } catch (error) {
        console.error(error)
        error.status = 400;
        next(error);
    }
 
};

module.exports = {
    getTasks,
}
