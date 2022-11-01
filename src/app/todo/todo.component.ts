import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { markTodoCompleted, removeTodo } from '../state/actions/todo.actions';
import { ITodo } from '../state/interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo = {} as ITodo;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  delete(e: Event, id: string) {
    e.stopImmediatePropagation();
    this.store.dispatch(removeTodo({ id }))
  }

  update(e: Event, id: string, complete: boolean) {
    e.stopImmediatePropagation();
    this.store.dispatch(markTodoCompleted({ id, complete: !complete }))
  }

}
