//object.map(function)

let prices = [200, 100, 150, 600, 1000]

// lets keep 20 discount on all the sales items.
function discount(price)
{
    return price - 20;
}


let newPrice = prices.map(discount)
console.log(newPrice)