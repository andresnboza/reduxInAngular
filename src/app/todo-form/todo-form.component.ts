import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../state/actions/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      todo: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.form.valid) {

      this.store.dispatch(addTodo({
        todo: {
          completed: false,
          todo: this.form.controls["todo"].value
        }
      }));
      this.form.reset();
    }
  }

}
