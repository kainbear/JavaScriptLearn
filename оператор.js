
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