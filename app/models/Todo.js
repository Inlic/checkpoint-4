export default class Todo {
  constructor({ _id, completed, description }) {
    this.id = _id;
    this.completed = completed || false
    this.description = description
  }

  get Template(){
    return `<li><input class="mx-2" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" ${this.completed ? "checked": ""}>${this.description} - <i class="fa fa-trash" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i><li>`
  }
}