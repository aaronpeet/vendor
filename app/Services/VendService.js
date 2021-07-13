import { ProxyState } from "../AppState.js"



class VendService{
    snackSelect(type) {
        totalCost += ProxyState.snack.price //note: how do i use [type] to represent my snack?

document.getElementById('totalCost').innerText = totalCost

    }
    buy() {
        if (ProxyState.customer.money >= totalCost) {  //note: where should i store my "totalCost" variable
            ProxyState.customer.money -= totalCost
        } else {
            alert('Insufficient Funds')
        }
    }
}

export const vendService = new VendService()