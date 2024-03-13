//switch..case
var days = 1
switch (days) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wendsday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    default:
        console.log('ERROR')
}

var color = 'green'
switch (color) {
    case 'red':
        console.log('Stop')
        break
    case 'yellow':
        console.log('wait')
        break
    case "green":
        console.log('Go')
        break
    default:
        console.log('ERROR')
}


//undefined
let text;
console.log(typeof text)

//null
let text2 = null
console.log(text2)

//NaN - not a number, infinity - forever - свойства типа данных - под капотом number

//6 - object - это - {}

var obj = {
    name: "Aidana",
    //key , значение
    surname: "Bekova",
    age: 26,
    address: {
        street: 'Ibraimova 101',
        building: 'victory',
        floor: 2,
        number: null
    },
    family: true

}

console.log(obj)

//методы obj

// console.log(obj.name) через точку получении имя
console.log(obj.address.floor)

//внести изменении
obj.work = 'google'
console.log(obj)


//удаление ключа

delete obj.floor
console.log(obj)


obj['age'] = 27
console.log(obj)


// для /получении ключей
console.log(Object.keys(obj))


//

console.log(Object.values(obj))

console.log(Object.entries(obj))

console.log(obj.hasOwnProperty('family'))


//Array - массив

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numbers[1])

//цикл


//for - самый часто используемый

for (let i = 0; i <= 10; i++) {
    console.log(i)
}





