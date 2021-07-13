import ValuesController from "./Controllers/ValuesController.js";
import Vend from "./Controllers/VendController.js"

class App {
  valuesController = new ValuesController();
  
  vend = new Vend();
}

window["app"] = new App();
