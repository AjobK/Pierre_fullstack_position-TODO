import {Component, Output} from '@angular/core';
import {Todo, TodoService} from "./todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <div class="title">
      <h1>
        A list of TODOs
      </h1>
    </div>
    <div class="list">
      <label for="search">Search...</label>
      <input id="search" type="text" [(ngModel)]="filterString">
      <app-progress-bar *ngIf="!(todos$ | async)?.length"></app-progress-bar>
      <app-todo-item
        *ngFor="let todo of todos$ | async | todoFilter : filterString"
        (click)="removeTodo(todo)"
        [item]="todo">
      </app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  todos$: Observable<Todo[]>; // Removed readonly as it may change based on removal
  filterString: string = '';

  constructor(protected todoService: TodoService) {
    this.todos$ = todoService.getAll();
  }

  removeTodo(todo: Todo) {
    this.todoService.remove(todo.id).subscribe(
      () => {
        this.todos$ = this.todoService.getAll();
      },
      err => {
        alert(`Could not remove TODO...\n\n[Message] '${ err }'`)
      }
    );
  }
}
