import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from "../models/todo/todo-model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todoList: Array<TodoModel>, search: string): any {
    if(!search || !todoList){
      return todoList
    }
    return todoList.filter((todo)=>todo.title.toLowerCase().includes(search.toLowerCase()));
  }

}
