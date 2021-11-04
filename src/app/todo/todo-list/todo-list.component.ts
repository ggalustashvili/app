import { Component, OnInit } from '@angular/core';
import {GetTodosService} from "../../../services/get-todos.service";
import {TodoModel} from "../../models/todo/todo-model";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: any
  searchValue!:string
  searchUpdated = new Subject<string>()
  constructor(private todoService : GetTodosService ) { }

  ngOnInit(): void {
    this.fetchToDo()
    this.searchUpdated.pipe(debounceTime(700),distinctUntilChanged()).subscribe( value => {
    this.searchValue = value;
    });
  }

  fetchToDo(){
    this.todoService.fetchToDos().subscribe( element => this.todoList = element )
  }
  deleteToDo(index:number){
    this.todoList.splice(index , 1);
  }


}
