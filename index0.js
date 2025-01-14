let myName

console.log(myName)

myName = 'Stanislav'

console.log(myName)


console.log(console.log(10))

const myName = 'Stanislav'

myName = ''

console.log(myName)

const users = [
    { number: 4, name: "Николай" },
    { number: 2, name: "Анастасия" },
    { number: 1, name: "Тимур" },
    { number: 2, name: "Евгений" },
    { number: 3, name: "Катерина" }
  ]
  
  const selectedSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j; // Меняем значение переменной на наибольшее значение
        }
      }
  
      [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
    }
  };
  
  