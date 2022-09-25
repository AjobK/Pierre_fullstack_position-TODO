import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TodoFilterPipe } from './shared/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ProgressBarComponent,
    TodoFilterPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
