const price = +prompt('Check number', '0');
const tip = +prompt('Please enter tip percentage', '0');
const tipAmount = price * tip / 100;
const saved = price + tipAmount;
const priceWithTip = saved;
let res;



if (price > 0 && tip <= 100 && tip > 0) {
    res = `Check number: ${parseFloat(price.toFixed(2))}
Tip: ${parseFloat(tip.toFixed(2))}%
Tip amount: ${parseFloat(tipAmount.toFixed(2))}
Total sum to pay: ${parseFloat(priceWithTip.toFixed(2))}`;
alert(res);
  
} else {
  res = 'Invalid input data';
  alert(res);
}

console.log(res);