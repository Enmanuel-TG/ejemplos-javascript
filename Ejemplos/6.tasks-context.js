import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

function TasksProvider({ children }) {
  // Read
  const [tasks, setTasks] = useState([]);

  // Create
  function createTask(task) {
    const temp = [...tasks, task];

    setTasks(temp);
  }

  // Update
  function updateTask(id, newTask) {
    const temp = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          ...newTask,
        };
      }

      return task;
    });

    setTasks(temp);
  }

  // Delete
  function deleteTask(id) {
    const temp = tasks.filter(task => task.id !== id);

    setTasks(temp);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

const useTasksContext = () => useContext(TasksContext);

export { TasksProvider, useTasksContext };
