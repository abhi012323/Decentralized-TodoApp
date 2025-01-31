const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

// Define routes
router.get('/', getTasks);
router.post('/', addTask); // Ensure this line is present to handle POST requests
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;