import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskAnalytics from './components/TaskAnalytics';
import { Container, Title } from './styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (title, isUrgent, isImportant) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      isUrgent,
      isImportant,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    // Edit functionality can be implemented here
  };

  // Sort tasks based on priority
  const sortedTasks = tasks.sort((a, b) => {
    if (a.isUrgent && !b.isUrgent) return -1;
    if (!a.isUrgent && b.isUrgent) return 1;
    if (a.isImportant && !b.isImportant) return -1;
    if (!a.isImportant && b.isImportant) return 1;
    return 0;
  });

  return (
    <Container>
      <Title>Decentralized To-Do Application</Title>
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={sortedTasks} 
        deleteTask={deleteTask} 
        toggleTask={toggleTask} 
        editTask={editTask} 
      />
      <TaskAnalytics tasks={tasks} />
    </Container>
  );
};

export default App;