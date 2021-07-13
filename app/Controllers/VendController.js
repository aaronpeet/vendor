import { ProxyState } from "../AppState.js";
import { vendService } from "../Services/VendService.js";

function _draw() {
    let customer = ProxyState.customer
    document.getElementById('name').innerText = customer.name
    document.getElementById('money').innerText = customer.money.toFixed(2)
}


export default class VendController{
    constructor() {
       _draw()
    }
   
    snackSelect(type) {
        vendService.snackSelect(type)
    }
    buy() {
        vendService.buy()
        _draw()
    }
}