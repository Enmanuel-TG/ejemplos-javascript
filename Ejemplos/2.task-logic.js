// CRUD
let tasks = [];

// Create
function createTask(task) {
  tasks = [...tasks, task];
}

// Read
function getTasks() {
  return tasks;
}

// Update
function updateTask(id, newTask) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        ...newTask,
      };
    }

    return task;
  });
}

// Delete
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}
