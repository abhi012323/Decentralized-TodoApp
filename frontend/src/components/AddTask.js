import React, { useState } from 'react';
import { AddTaskContainer, AddTaskInput, AddTaskButton, Checkbox } from '../styles';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, isUrgent, isImportant);
      setTitle('');
      setIsUrgent(false);
      setIsImportant(false);
    }
  };

  return (
    <AddTaskContainer>
      <AddTaskInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <label>
        <Checkbox
          checked={isUrgent}
          onChange={() => setIsUrgent(!isUrgent)}
        />
        Urgent
      </label>
      <label>
        <Checkbox
          checked={isImportant}
          onChange={() => setIsImportant(!isImportant)}
        />
        Important
      </label>
      <AddTaskButton onClick={handleSubmit}>Add Task</AddTaskButton>
    </AddTaskContainer>
  );
};

export default AddTask;