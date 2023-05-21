let priceOne = Number(document.getElementById('price_1').textContent);
let priceTwo = Number(document.getElementById('price_2').textContent);
let priceThree = Number(document.getElementById('price_3').textContent);
let priceFour = Number(document.getElementById('price_4').textContent);
let summ = priceOne + priceTwo + priceThree + priceFour;

let inputTotal = document.getElementById('total');
inputTotal.textContent = String(summ) + ' руб.';

function salePrice() {
    inputTotal.textContent = String(summ - (summ * 20 / 100)) + ' руб';
};

