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
      return newTask;
    }

    return task;
  });
}

// Delete
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

// TaskBuilder
function taskBuilder(title, isCompleted = false) {
  // private method to generate unique id
  function _uuid() {
    return Math.random().toString(36).substr(2, 9);
  }

  return {
    id: _uuid(),
    title: title,
    isCompleted: isCompleted,
  };
}

// Implementación
console.log(getTasks());
createTask(taskBuilder('Task 1'));
createTask(taskBuilder('Task 2', true));
console.log(getTasks());
updateTask('1', {title: 'Task 1 updated'});
