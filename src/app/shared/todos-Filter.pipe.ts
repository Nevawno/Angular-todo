import { Todos } from './todos.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'todosFilter'
})
export class TodosFiltersPipe implements PipeTransform{

    transform(todos: Todos[], search: string = ''): Todos[] {
        if (!search.trim()) {
            return todos;
        } 

        return todos.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1; 
        });
        
    }
}