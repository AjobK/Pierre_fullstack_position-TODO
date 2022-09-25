import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id: number;
  task: string;
  priority: 1 | 2 | 3;
}

// Unused now
let mockData: Todo[] = [
  { id: 0, task: 'Implement loading - frontend only', priority: 1 },
  { id: 1, task: 'Implement search - frontend only', priority: 2 },
  { id: 2, task: 'Implement delete on click - frontend only', priority: 1 },
  { id: 3, task: 'Replace mock service by integrating backend', priority: 3 },
];

// Unused now
function removeFromMockData(id: number) {
  mockData = mockData.filter(todo => todo.id !== id);
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<any>('/api/todo')
    // [OLD]
    // return of(undefined).pipe(delay(2_000), map(() => mockData));
  }

  remove(id: number): Observable<void> {
    return this.http.delete<any>(`/api/todo/${id}`)
    // [OLD]
    // return new Observable<void>(observer => {
    //   // My solution assumes that the random failure may not be removed
    //   // and that this function may not be altered until a later exercise
    //   setTimeout(() => {
    //     if (Math.random() < .8) {
    //       this.http.delete<any>(`/api/todo/${id}`)
    //       removeFromMockData(id);
    //       observer.next();
    //     } else {
    //       observer.error('Failed');
    //     }
    //     observer.complete();
    //   }, 2_000)
    // })
  }
}
