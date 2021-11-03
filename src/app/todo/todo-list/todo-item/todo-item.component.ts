import { Component, OnInit , Input} from '@angular/core';
import {TodoModel} from "../../../models/todo/todo-model";
import {DeletedTodoService} from "../../../../services/deleted-todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoInfo!:TodoModel;
  constructor(private deleteService : DeletedTodoService) { }

  ngOnInit(): void {

  }
  addTodeletedList(todo:any):void{
    this.deleteService.addDeletedTodo(todo)
  }

}
