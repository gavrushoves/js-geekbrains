"use strict";

// Задание 1
var prime = [ 2 ],
    num = 2;
while ( num <= 100) {
    var checkingNumber = 1;
    for ( var i = 0; i < prime.length; i++) {
        if ( num % prime[ i ] === 0) {
            checkingNumber = 0;
        }
    }
    if ( checkingNumber === 1 ) {
        prime.push( num );
    }
    num++;
}
console.log ( prime );

// задание 2
var j = 0;
do {
	if (j % 2 == 0 && j !== 0){
		console.log (j + ' - четное число');
	}
	else if (j % 2 !== 0) {
		console.log (j + ' - нечетное число');
	}
	else {
		console.log (j + ' - это ноль');
	}
	j++;
} while (j < 11);

// задание 3
for (var k = 0; k < 10; console.log(k++)) {}

// задание 4
var x = 'x';
for ( var i = 20; i--; ) {
    console.log( x );
    x = x + '--x';
}

// задание 2 методичка
var basket = [
	{
		productName:'vodka',
		price:10
	},
	{
		productName:'tomat',
		price:6
	}
];
basket.push({productName:'mayo', price:2}, {productName:'bread', price:1});
function totalPrice(){
	var total = 0;
	for ( var i = 0; i < basket.length; i++) { 
		if (basket[i].price == undefined){
			continue;
		}
		total = total + basket[i].price;

		
	}
	return total;
}
console.log(totalPrice());
