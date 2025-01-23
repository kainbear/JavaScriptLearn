let a = 5
let b = 3

let c

c = a + b
console.log(c) // 8

a = 8
b = 12

c = a + b
console.log(c) // 20

// Функция(это объяект,есть свойства) может быть =
// {именнованной, анонимной,присвоенна перменной,
// aргументом при вызове другой функции,
// значением свойства(метода объяекта}

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFn(5, 4))
console.log(myFn)
console.dir(myFn)

// Функция возвращает undefined если нет иснтрукции return

// const personOne = {
//     name: 'bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne)
// console.log(personOne.age) // 22

const personOne = {
    name: 'bob',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}


// Колбэк Функции Внизу

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age) // 21
console.log(updatedPersonOne.age) // 22

function anotherFunction(){
    // Действия ...
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Stanislav')
}

setTimeout(printMyName, 10000) // Отложенный вызов колбэк функции

