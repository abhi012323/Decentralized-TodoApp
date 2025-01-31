import React, { useState } from 'react';
import { Button, Input, Checkbox, TaskItemContainer } from '../styles';

const TaskItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(task.title);
  };

  return (
    <TaskItemContainer>
      <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)} />
      {isEditing ? (
        <Input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      {isEditing ? (
        <>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
        </>
      )}
      <div>
        {task.isUrgent && <span>Urgent</span>}
        {task.isImportant && <span>Important</span>}
      </div>
    </TaskItemContainer>
  );
};

export default TaskItem;