import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  let taskCount = 0
  for(let i = 0; i < ProxyState.todos.length; i++){
    let todo = ProxyState.todos[i]
    if(todo.completed == false){
      taskCount+=1
    }
  }
  document.getElementById('todo-count').innerHTML = "Things to do: "+taskCount
 }

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on('todos',_drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault()
    let form = event.target
    //TODO build the todo object from the data that comes into this method
    let todo = { description: form.newtodo.value, completed: false };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    console.log(todoId)
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}