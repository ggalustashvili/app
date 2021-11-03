import { Component, OnInit } from '@angular/core';
import {GetTodosService} from "../../../services/get-todos.service";
import {TodoModel} from "../../models/todo/todo-model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: any
  constructor(private todoService : GetTodosService ) { }

  ngOnInit(): void {
  this.fetchToDo()

  }

  fetchToDo(){
    this.todoService.fetchToDos().subscribe( element => this.todoList = element )
  }



}
