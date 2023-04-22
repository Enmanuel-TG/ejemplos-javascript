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

const firstTask = taskBuilder('Task 1');
const secondTask = taskBuilder('Task 2', true);
const thirdTask = taskBuilder('Task 3');
