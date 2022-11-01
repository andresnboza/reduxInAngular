import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interfaces/todo.interfaces';

export const addTodo = createAction("[TODO API] Add todo", props<{ todo: ITodo }>());
export const removeTodo = createAction("[TODO API] Remove Todo", props<{ id: string }>());
export const markTodoCompleted = createAction("[TODO API] Mark Completed", props<{ id: string, complete: boolean }>());
export const startFetchingTodos = createAction("[TODO API] Start Fetch Todos");
export const setFetchedTodos = createAction("[TODO API] Set Fetched Todos", props<{ todos: ITodo[] }>());