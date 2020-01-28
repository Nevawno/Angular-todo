import { TodoService } from './../shared/todos.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../shared/todos.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  private loading: boolean = true;

  constructor(private todosService: TodoService) {
    
  }

  ngOnInit() {
    this.todosService.fetchTodos().pipe(delay(500)).subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id:number) {
    this.todosService.removeTodo(id);
  }

}
