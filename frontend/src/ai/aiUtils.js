import { NeuralNetwork } from 'brain.js';

const net = new NeuralNetwork();

// Dummy training data for task prioritization
net.train([
  { input: { urgent: 1, important: 1 }, output: { priority: 1 } },
  { input: { urgent: 1, important: 0 }, output: { priority: 0.8 } },
  { input: { urgent: 0, important: 1 }, output: { priority: 0.7 } },
  { input: { urgent: 0, important: 0 }, output: { priority: 0.1 } },
]);

export const prioritizeTasks = (tasks) => {
  return tasks
    .map((task) => {
      const priority = net.run({ urgent: task.isUrgent ? 1 : 0, important: task.isImportant ? 1 : 0 }).priority;
      return { ...task, priority };
    })
    .sort((a, b) => b.priority - a.priority);
};