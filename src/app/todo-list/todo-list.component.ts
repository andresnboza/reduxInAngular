import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { startFetchingTodos } from '../state/actions/todo.actions';
import { ITodo } from '../state/interfaces/todo.interfaces';
import { selectTodos } from '../state/selectors/todo.selectors';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ITodo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(startFetchingTodos());
  }

}
