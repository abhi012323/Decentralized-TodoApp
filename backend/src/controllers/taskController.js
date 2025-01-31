const Task = require('../models/Task');

// Add a new task
exports.addTask = async (req, res) => {
  console.log('Received POST request to /api/tasks'); // Log the request
  console.log('Request body:', req.body); // Log the request body
  try {
    const newTask = new Task({
      title: req.body.title,
      completed: false,
    });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Other controller functions (getTasks, updateTask, deleteTask)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};