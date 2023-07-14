
import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [
    { description: 'Task 1', completed: false },
    { description: 'Task 2', completed: false },
    { description: 'Task 3', completed: false },
    { description: 'Task 4', completed: false }
  ];

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
  
  markTaskAsCompleted(task: Task): void {
    task.completed = true;
  }
  
  markTaskAsPending(task: Task): void {
    task.completed = false;
  }
}

