import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import{HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GetTodosService {
  todoList = [];
  api = environment.api;
  constructor(private http: HttpClient) { }

  fetchToDos(){
    return this.http.get(this.api);
  }

}
