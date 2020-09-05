export default class Todo {
  constructor({ _id, completed, description }) {
    this.id = _id;
    this.completed = completed || false
    this.description = description
  }

  // TODO Update a counter with the number of todos left to be completed
  get Template(){
    return `<li><input class="mx-2" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" ${this.completed ? "checked": ""}>${this.description}<i class="fa fa-trash float-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i><li>`
  }
}