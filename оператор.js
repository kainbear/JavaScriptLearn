
// Выражение 1 && Выражение 2 - ищем 1 ложное значение,либо это либо это

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

const blueButton = {
    ...button,
    width: 150,
    text: 'Sell',
    color: "blue"
}

const Buttons = {
    redButton,
    blueButton,
}

console.table(Buttons)

// Конкатенация Строк
const hello = 'hello'
const world = 'world'

const greeting = hello + ' ' + world

console.log(greeting)

// Шаблонная строка

const hello1 = 'hello'
const world1 = 'world'

const greeting1 = `${hello1} ${world1}`

console.log(greeting1)