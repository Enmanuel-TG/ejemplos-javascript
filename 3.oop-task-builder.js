class TaskBuilder {
  // private method to generate unique id
  #_uuid = () => Math.random().toString(36).substr(2, 9);

  constructor(title, isCompleted = false) {
    this.id = this.#_uuid();
    this.id = this.#_uuid();
    this.title = title
    this.isCompleted = isCompleted
  }
}

const firstTask = new TaskBuilder('Task 1')
const secondTask = new TaskBuilder('Task 2', true)
const thirdTask = new TaskBuilder('Task 3')
