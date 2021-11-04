import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from "../models/todo/todo-model";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(todoList: Array<TodoModel>, searchValue: string): any {
    if(!searchValue || !todoList){
      return todoList
    }

    return todoList.filter((todoFiltered)=>todoFiltered.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
