import React, { createContext, useState } from 'react';

interface Task {
  id: string;
  text: string;
  description: string;
  completed: boolean;
  priority: string;
  date: Date | null;
}

interface TasksContextProps {
  tasksList: Task[];
  addTask: (taskName: string, description: string, priority: string, date: Date | null) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasksList, setTaskList] = useState<Task[]>([]);

  const addTask = (taskName: string, description: string, priority: string, date: Date | null) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskName,
      description,
      completed: false,
      priority,
      date,
    };
    setTaskList([...tasksList, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTaskList(tasksList.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTaskList(tasksList.filter(task => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasksList, addTask, toggleTaskCompletion, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
