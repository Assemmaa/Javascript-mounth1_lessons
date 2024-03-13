console.log('Hello world');

//переменные var
var name = 'Aidana';

console.log(name);


//camelCase - javaScript

//типы данных - 8

//typeof - чтобы узнать тип данных

//TODO string - текст букв

var str = "Aem";
console.log(str);

// методы - string
//toUpperCase - делает str большими буквами
//toLowerCase - делает str c маленкими
//length - длина строк считает
//repeat - повторяй 30 раз например
//number - числа - цифры


var name2 = "ase";
var surname = 'ghjj';
console.log(name2 + ' ' + surname);

//чтобы ставить пробел между двумя строками


//TODO - num
var num = 23;
console.log(num);


var num1 = 34;
console.log(num1);

var num2 = 44;
// console.log(num1 + num2)
// console.log(num1 / num2)
// console.log(num1 * num2)
// console.log(num1 - num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)


console.log('Средний возраст группы 36-1 =', (16 + 17 + 18 + 16 + 17 + 18 + 28 + 19 + 18 + 16)  / 10 );


//boolean - 2 значений - true or false - логический тип данных

console.log(true + false);

// true - под капотом  1
//false - под капотом  0

console.log(45 == '45'); // не строгое равенства - ==
console.log(50 === '50');  // строгое равенство - ===

console.log(50 !== '50'); //не строгое равенство


//операторы логические && , || - условные конструкции if.else


var logIn = 'geeks@gmail.com';
var password = 'geeks3601';


var userLogIn = prompt('Enter your login: '); //modal window
var userPassword = prompt('Enter your password: ');


if (userLogIn === logIn && userPassword === password) {
    alert('Okay')
}else {
    alert("Enter again please!")
}


var num3 = prompt('num')


//Number - чтобы str поменять в number
//String - чтобы значение поменять в string


var experience = Number( prompt('Enter how much year you worked: '))
var developerLevel;


if (experience > 0 && experience < 1) {
    developerLevel = 'junior'
}else if (experience >= 1 && experience < 7) {
    developerLevel = 'middle'
}else if (experience >= 7 && experience <= 60) {
    developerLevel = 'senior'
}else {
    developerLevel = 'error'
}


console.log("your level - " + developerLevel)