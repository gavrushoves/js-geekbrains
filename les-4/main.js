"use strict";

var numToObj = {
    convToArr: function(){
     var arrNum;
     var userNum = prompt("напишите число от 0 до 999", '15' );
     if (!userNum || isNaN(userNum) || userNum < 0 || userNum > 999) {
     		return numToObj.run();
     } else return arrNum = userNum.split('');
    },
    run: function() {
        var object;
        var number = this.convToArr();
        if (number.length == 3){
        	object = {
      	    'сотни': number[0],
      	    'десятки': number[1],
      	    'единицы': number[2]
        	};	
        }	else if (number.length == 2){
        	object = {
      	    'десятки': number[0],
      	    'единицы': number[1]
        	};
        }	else if (number.length == 1){
        	object = {
      	    'единицы': number[0]
        	};
        };
      console.log(object);
    }
};

numToObj.run();

// задание 2 
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
console.log('Итоговая цена ' + totalPrice() + ' рублей');
