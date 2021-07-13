import { ProxyState } from "../AppState.js"



class VendService{
    snackSelect() {
        ProxyState.totalCost += ProxyState.snack.price

document.getElementById('totalCost').innerText = ProxyState.totalCost.toFixed(2)

    }
    buy() {
        if (ProxyState.customer.money >= ProxyState.totalCost && ProxyState.totalCost !=0) {  
            ProxyState.customer.money -= ProxyState.totalCost
            ProxyState.totalCost = 0 
            return ProxyState.customer.money
        } else {
            alert('Insufficient Funds')
        }
        document.getElementById('money').innerText = ProxyState.customer.money.toFixed(2)
        document.getElementById('totalCost').innerText = ProxyState.totalCost.toFixed(2)
    }
}

export const vendService = new VendService()