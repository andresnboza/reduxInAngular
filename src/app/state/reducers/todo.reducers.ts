import { createReducer, on } from '@ngrx/store';
import { setFetchedTodos } from '../actions/todo.actions';
import { ITodo } from '../interfaces/todo.interfaces';

export interface ItodoState {
  todos: ITodo[];
}

export const initialState: ItodoState = {
  todos: []
}

export const todosReducer = createReducer(
  initialState,
  on(setFetchedTodos,
    (state, action) => ({
      ...state,
      todos: action.todos
    }))
);