let getAllTasks = (req, res)=>{
 res.send('All items tasks')
}

let createTask = (req, res)=>{
 res.send('Create task')
}

let getTask = (req, res)=>{
 res.send('Get single task')
}

let updateTask = (req, res)=>{
 res.send('Update task')
}

let deleteTask = (req, res)=>{
 res.send('Delete task')
}

module.exports = {getAllTasks, createTask, getTask, deleteTask, updateTask}