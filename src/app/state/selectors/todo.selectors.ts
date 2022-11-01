import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItodoState } from "../reducers/todo.reducers";

const todoState = createFeatureSelector<ItodoState>("todos");

export const selectTodos = createSelector(
  todoState,
  (state) => state.todos
);