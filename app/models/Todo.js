export default class Todo {
  constructor({ _id, completed, description }) {
    this.id = _id;
    this.completed = completed
    this.description = description
  }

  get Template(){
    return `<li><input class="mx-2" type="checkbox" ${this.completed ? "checked": ""}>${this.description}<li>`
  }
}