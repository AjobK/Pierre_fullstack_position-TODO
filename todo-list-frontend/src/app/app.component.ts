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
        [item]="todo">
      </app-todo-item>
    </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly todos$: Observable<Todo[]>;
  filterString: string = '';

  constructor(todoService: TodoService) {
    this.todos$ = todoService.getAll();
  }
}
