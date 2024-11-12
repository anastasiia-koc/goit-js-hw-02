
let check;

function makeTransaction(quantity, pricePerDroid, customerCredits)
{
    let orderPrice = quantity * pricePerDroid
    if (orderPrice > customerCredits)
    {
    check = "Insufficient funds!";
    }
    else {
        check = `You ordered ${quantity} droids worth ${orderPrice} credits!`;
    };
    return check
}
console.log(makeTransaction(5, 3000, 23000)); 
console.log(makeTransaction(3, 1000, 15000)); 
console.log(makeTransaction(10, 5000, 8000)); 
console.log(makeTransaction(8, 2000, 10000)); 
console.log(makeTransaction(10, 500, 5000)); 