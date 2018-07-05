"use strict";

//перевод цельсиев в фаренгейты
var temperatureCesium = +prompt("Сколько градусов по цельсию за окном?");
var temperatureFahrenheit = (9/5)*temperatureCesium+32;
alert("В Фаренгейтах это = " + temperatureFahrenheit + " градусов");
//переменные
var name = "Василий";
var admin = name;
alert(admin);
// Загадка 
alert(1000 + " +\"108\"" + " = 1000108");

/*async не ждет загрузки документа и срабатывает по загрузке себя,
а defer ждет и срабатывает в порядке написания по порядку*/