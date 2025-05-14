import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodosItemComponent } from '../todos-item/todos-item.component'; 

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodosItemComponent], 
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is title1",
        desc: "Description1",
        active: true
      },
      {
        sno: 2,
        title: "this is title2",
        desc: "Description2",
        active: true
      },
      {
        sno: 3,
        title: "this is title3",
        desc: "Description3",
        active: true
      },
    ];
  }

  ngOnInit(): void {
   
  }
}
