import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo.service';

@Pipe({ name: 'todoFilter' })
export class TodoFilterPipe implements PipeTransform {
  transform(todoList : Todo[] | null, filterString: string): Todo[] | undefined {
    return todoList?.filter(
      (todo: Todo) => todo.task.toLowerCase().includes(filterString.toLowerCase())
    ); 
  }
}
