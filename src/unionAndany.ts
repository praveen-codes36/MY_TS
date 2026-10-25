let sub:number | string = '1M'

let apiRequest : 'pending'| 'success' | 'error'='pending'

let airlineSeat : 'aisle' |'window' | 'middle'='aisle'

airlineSeat= 'aisle'

const orders=['12','20','28','42']

let currenorder:string | undefined;

for(let order of orders){
    if(order=='28'){
        currenorder=order;
        break;
    }
}

console.log(currenorder)