import TodoController from "./controllers/TodoController.js";
import WeatherController from "./controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ClockController from "./Controllers/ClockController.js"


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    this.clockController = new ClockController();    
  }
}


window["app"] = new App();