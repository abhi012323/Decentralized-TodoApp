import React from 'react';
import { TaskListContainer, TaskItemContainer, TaskActions, Tag, Checkbox, Button } from '../styles';

const TaskList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  return (
    <TaskListContainer>
      {tasks.map(task => (
        <TaskItemContainer key={task.id}>
          <Checkbox 
            checked={task.completed} 
            onChange={() => toggleTask(task.id)} 
          />
          <div>
            <h3>{task.title}</h3>
            {task.isUrgent && <Tag urgent={true}>Urgent</Tag>}
            {task.isImportant && <Tag important={true}>Important</Tag>}
          </div>
          <TaskActions>
            <Button onClick={() => deleteTask(task.id)}>Delete</Button>
            <Button onClick={() => editTask(task.id)}>Edit</Button>
          </TaskActions>
        </TaskItemContainer>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;