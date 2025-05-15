import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodosItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  localItem: string | null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem === null) {
        this.todos = [];
      } else {
        try {
          this.todos = JSON.parse(this.localItem);
        } catch (e) {
          console.error("Failed to parse todos from localStorage", e);
          this.todos = [];
        }
      }
    } else {
      this.localItem = null;
      this.todos = [];
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

   toggleTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  // toggleTodo(todo: Todo): void {
  //   const index = this.todos.indexOf(todo);
  //   this.todos[index].active =! this.todos[index].active;
  //   localStorage.setItem("todos", JSON.stringify(this.todos));
  // }
}
