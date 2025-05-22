import { Task } from "./task";

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  createTask(description: string): Task {
    const task = new Task(this.nextId++, description);
    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter(task => task.isCompleted);
  }

  getPendingTasks(): Task[] {
    return this.tasks.filter(task => !task.isCompleted);
  }

  findTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}