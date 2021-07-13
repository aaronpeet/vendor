import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function _draw() {
    let customer = ProxyState.name
    document.getElementById('name').innerText = customer.name
    document.getElementById('money').innerText = customer.money
}


export default class VendController{
    constructor() {
       _draw()
    }
   
    selectSnack(type) {
        vendService.selectSnack()
    }
    buy() {
        vendService.buy()
    }
}