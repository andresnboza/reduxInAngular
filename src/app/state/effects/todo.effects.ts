import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "src/app/services/todo.service";
import { addTodo, markTodoCompleted, removeTodo, setFetchedTodos, startFetchingTodos } from "../actions/todo.actions";
import { concatMap, map, mergeMap, exhaustMap } from "rxjs";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {

  }

  addTodo$ = createEffect(() => this.actions$.pipe(
    ofType(addTodo),
    concatMap((addTodoAction) => this.todoService.addTodo(addTodoAction.todo).pipe(
      map(() => startFetchingTodos())
    ))
  ));

  getTodos$ = createEffect(() => this.actions$.pipe(
    ofType(startFetchingTodos),
    exhaustMap(() => this.todoService.getAllTodos().pipe(
      map((todos) => setFetchedTodos({ todos }))
    ))
  ));

  removeTodos$ = createEffect(() => this.actions$.pipe(
    ofType(removeTodo),
    mergeMap((removeTodoAction) => this.todoService.removeTodo(removeTodoAction.id).pipe(
      map(() => startFetchingTodos())
    ))
  ));

  markTodoCompleted$ = createEffect(() => this.actions$.pipe(
    ofType(markTodoCompleted),
    concatMap((markTodoCompletedAction) => this.todoService.markTodoAsCompleted(markTodoCompletedAction.id, markTodoCompletedAction.complete).pipe(
      map(() => startFetchingTodos())
    ))
  ));

}