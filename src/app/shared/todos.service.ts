import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todos{
    id: number,
    title: string,
    completed: boolean,
    date?: any
}


@Injectable({providedIn: 'root'})

export class TodoService {
  public todos: Todos[] = [];

  constructor(private http: HttpClient) {

  }

  fetchTodos(): Observable<Todos[]> {
      return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(tap(todos => this.todos = todos));
  }
    
    
  onToggle(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(id: number) {
      this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: Todos) {
    this.todos.push(todo);
  }
}