const myArray = [1, 2, 3]
console.log(myArray) // [1,2,3]

const newArray = myArray.map(function (el) {
    return el * 10
})

console.log(newArray) // [3,6,9]   
console.log(myArray) // [1,2,3]

// создает новый массив после каждого элемента прохождения в функции
