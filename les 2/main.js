/*1.Почему в методичке в примере оператора switch
для вывода сообщения используется echo? разве echo не для php?*/

"use strict";
// Для просмотра домашки раскоментируйте участок кода нужного задания!!

// // 1.Задание
// var a = 1, b = 1, c, d;
// c = ++a; alert(c); //2 префиксная форма инкремента выводит сразу увеличенное на 1 число
// d = b++; alert(d); // 1 постфиксная форма инкремента выводит число которое и было, при пофторном вызове добавляет 1
// c = (2+ ++a); alert(c); // 5 в a записано 2 ++a сразу запишет в него 3, 3+2=5
// d = (2+ b++); alert(d); // 4 в b записано 2, b++ даст 2, 2+2=4
// alert(a); // 3 в а записано 3 префиксной формой инкремента
// alert(b); // 3 при повторном вызове b стало равно 3, т.к  постфиксная форма инкремента

// задание 2
// var a = 2;
// var x = 1 + (a *= 2); //5

// //задание 3
// var b = 3;
// var c = 5;
// if (b >= 0 && c >= 0) {
// 	var difference = b-c;
// 	alert(difference);
// }
// else if (b < 0 && c < 0) {
// 	var multiplication  = b*c;
// 	alert(multiplication);
// }
// else if ((b < 0 && c >= 0) || (b >= 0 && c < 0)) {
// 	var summ = b + c;
// 	alert(summ);
// }

//Задание 4
// var a;
// function checkTheNumber(){
// 	a = parseInt(prompt("Введите число от 0 до 15", 13));
// 	if (a < 0){
// 		alert("введите число больше 0");
// 		checkTheNumber();
// 	} else if (a > 15){
// 		alert("введите число меньше 15");
// 		checkTheNumber();
// 	} else if ( a == '' || isNaN(a) ) {
// 		alert("введите число от 0 до 15");
// 		checkTheNumber();
// 	} else{
// 		return a;
// 	}
// };
// checkTheNumber();

// switch(a){
// 	case 0:
// 	console.log("0");
// case 1:
// 	console.log("1");
// case 2:
// 	console.log("2");
// case 3:
// 	console.log("3");
// case 4:
// 	console.log("4");
// case 5:
// 	console.log("5");
// case 6:
// 	console.log("6");
// case 7:
// 	console.log("7");
// case 8:
// 	console.log("8");
// case 9:
// 	console.log("9");
// case 10:
// 	console.log("10");
// case 11:
// 	console.log("11");
// case 12:
// 	console.log("12");
// case 13:
// 	console.log("13");
// case 14:
// 	console.log("14");	
// case 15:
// 	console.log("15");
// }



// Задание 5

// // Сумма
// function summ(a,b) {
// 	return a + b;
// }

// // Разность
// function difference(a,b) {
// 	return a - b;
// }

// // Деление
// function division(a,b) {
// 	return a / b;
// }

// // Умножение
// function multiplication(a,b) {
// 	return a * b;
// }


// // Задание 6
// function mathOperation(arg1, arg2, operation){
// 	switch(operation) {
// 	case 'summ':
// 		var sum = summ(arg1, arg2);
// 		alert(sum);
// 		break;
// 	case 'difference':
// 		var dif = difference(arg1, arg2);
// 		alert(dif);
// 		break;
// 	case 'division':
// 		var divis = division(arg1, arg2);
// 		alert(divis);
// 		break;
// 	case 'multiplication':
// 		var multipl = multiplication(arg1, arg2);
// 		alert(multipl);
// 		break;	
// 	}
// }
// mathOperation(15,26,'division');

// Задание 7
// 0 == null вернет false тк Абстрактный алгоритм сравнения для равенств возвращает 
		  // false если одно значение null, а второе не Undefined
		  // из спецификации ECMA

// Задание 8
// function power(val, pow){ 
// if(!pow) return 1; 
// else return val*power(val,pow-1); 
// }; 
// alert(power(2, 4));