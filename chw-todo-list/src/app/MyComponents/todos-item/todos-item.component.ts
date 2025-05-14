import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit {
  @Input() todo!: Todo;
  constructor() { }

  ngOnInit(): void {
    
  }

}
