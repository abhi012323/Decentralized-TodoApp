import React from 'react';
import { AnalyticsContainer, AnalyticsTitle, AnalyticsText } from '../styles';

const TaskAnalytics = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <AnalyticsContainer>
      <AnalyticsTitle>Task Analytics</AnalyticsTitle>
      <AnalyticsText>Total Tasks: {totalTasks}</AnalyticsText>
      <AnalyticsText>Completed Tasks: {completedTasks}</AnalyticsText>
      <AnalyticsText>Pending Tasks: {pendingTasks}</AnalyticsText>
    </AnalyticsContainer>
  );
};

export default TaskAnalytics;