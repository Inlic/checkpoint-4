import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'ben/todos'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    await api.post(url, todo);
    ProxyState.todos.push(todo)
    ProxyState.todos = ProxyState.todos
    this.getTodos()
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    if(todo.completed){
      todo.completed = false
    } else {
      todo.completed = true
    }
    let res = await api.put(url + todoId, todo);
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