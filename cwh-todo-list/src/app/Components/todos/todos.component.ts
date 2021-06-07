import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem!: any;
  constructor() { 
    const todosJson = localStorage.getItem("todos")
    this.localItem = todosJson !== null ? JSON.parse(todosJson) : [];
    this.todos = this.localItem;
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  todoAdd(todo: Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  todoToggleActive(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
