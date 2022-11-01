import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ITodo } from "../state/interfaces/todo.interfaces";

@Injectable({
  providedIn: "root"
})

export class TodoService {
  baseUrl: string = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {

  }

  addTodo(todo: ITodo) {
    return this.http.post<ITodo>(this.baseUrl, todo);
  }

  getAllTodos() {
    return this.http.get<ITodo[]>(this.baseUrl);
  }

  removeTodo(id: string) {
    return this.http.delete<ITodo>(`${this.baseUrl}/${id}`);
  }

  markTodoAsCompleted(id: string, complete: boolean) {
    return this.http.patch<ITodo>(`${this.baseUrl}/${id}`, { completed: complete });
  }
}