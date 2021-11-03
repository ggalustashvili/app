import { Injectable } from '@angular/core';
import {TodoModel} from "../app/models/todo/todo-model";

@Injectable({
  providedIn: 'root'
})
export class DeletedTodoService {
  deletedTodo :any = [];
  constructor() { }

  addDeletedTodo(todo:any): void{
    this.deletedTodo.push(todo);
    
  }

}
