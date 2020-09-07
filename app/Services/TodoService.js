import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js";

let url = 'ben/todos'
class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    await api.post(url, todo);
    ProxyState.todos.push(todo)
    ProxyState.todos = ProxyState.todos
    this.getTodos()
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    todo.completed ? todo.completed = false : todo.completed = true
    let res = await api.put(url + '/' + todoId, todo);
    ProxyState.todos = ProxyState.todos
  }

  async removeTodo(todoId) {
  await api.delete(`ben/todos/${todoId}`)
  let index = ProxyState.todos.findIndex(t => t.id == todoId)
  ProxyState.todos.splice(index, 1)
  ProxyState.todos = ProxyState.todos
  }
}

const todoService = new TodoService();
export default todoService;