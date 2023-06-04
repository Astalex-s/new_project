'use strict';
// let a = 10;

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// let num = 0;

// if (num < 49) {
//     console.log("Не верно!");
// }   else if (num > 100) { 
//         console.log("Слишком много!");
// }   else { 
//         console.log("Верно!");
// }  

// (num = 50) ? console.log("Верно!") : console.log("Не верно!");

// switch(num) {
//     case num < 40:
//         console.log("Не верно!");
//         break;
//     case num > 100:
//         console.log("Слишком много!");
//         break;
//     case num > 80:
//         console.log("Все еще слишком много!");
//         break;
//     case 50:
//         console.log("Верно!");
//         break;
//     default:
//         console.log("Что-то пошло не так!");
//         break;
// }
let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
    
//     console.log(i)
// }



// типы данных
/*var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log("string"*9);*/
// let something;
// console.log(something);

// let persone = {
//     name:"Jone",
//     age:25,
//     isMarried:false
// };

// console.log(persone["name"]);
// let arr = ['plam.png','orange.ipg','apple.bmp'];
// console.log(arr[0])

//alert('Hello World!');

// let answer = confirm('Are you here?');
// console.log(answer);
// let answer = prompt('Есть ли вам 18?', "Да");
// console.log(typeof(null));

// let incr = 10,
//     decr = 10;


// console.log(incr++);
// console.log(decr--);


//--------------------------------------------------------------------------------------------------

// цикл while тоже самое, что и for

// let i = 0;
// while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//             b = prompt("Во сколько обойдется?", '');
        
//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//             console.log('done')
//             appData.expenses[a] = b;
//         } else {
//             console.log('bad result');
//             i--;
//         }
//         i++
//     };
//--------------------------------------------------------------------------------------------------
// цикл do тоже самое, что и for
// let i = 0;
// do {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//             b = prompt("Во сколько обойдется?", '');
        
//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//             console.log('done')
//             appData.expenses[a] = b;
//         } else {
//             console.log('bad result');
//             i--;
//         }
//         i++
//     }
// while (i < 2);

//--------------------------------------------------------------------------------------------------
// // callback function

// function first(){
//     //что-то делаем
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// // CALLBACK FUNCTION

// function learnJS(leng, callback) {
//     console.log("Я учу " + leng);
//     callback();
// }

// function done (){
//     console.log("Я прошел 3-й урок!");
// }

// learnJS("JavaScript", done)

//OBJECT --------------------------------------------------------------------------------------------------

// let options  = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);

// options.bool = false;  // добавление свойства объекта
// options.color = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool; // удаление свойства объекта
// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + " имеет значение: " + options[key]); // перебор свойств объекта
// };

// console.log(Object.keys(options).length); // пересчет свойств объекта в числовом формате

//Arrey --------------------------------------------------------------------------------------------------

// let arr = ['first', 2, 3, 'four', 5];

// arr.pop(); // удаление последнего значения в массиве
// arr.push('5'); // добавление значения в конец массива
// arr.shift(); // удаление значения в начале массива
// arr.unshift('1'); // добавление значения в начало массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {    //перебор значений массива
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// let mass = [1, 3, 4, 6, 7] // перебор значений массива
// for (let key of mass){
//     console.log(key);
// }

// let ans = prompt('', ''), // преобразует переданные строки в массив через запятую
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ["sjsj", 'sjso', 'afqt', 'ih'], // склеивает значения массива в одну строку
//     i = arr.join(', ');
// console.log(i);

let arr = [1, 15, 4], // склеивает значения массива в одну строку
    i = arr.sort(compareNum);

function compareNum(a,b) { //сортировка массива цифр
    return a-b;
}
    
console.log(arr);
