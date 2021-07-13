import { ProxyState } from "../AppState.js"



class VendService{
    snackSelect(type) {
        totalCost += ProxyState.snack.price

document.getElementById('totalCost').innerText = totalCost

    }
    buy() {
        if (ProxyState.customer.money >= totalCost) {
            ProxyState.customer.money -= totalCost
        } else {
            alert('Insufficient Funds')
        }
    }
}