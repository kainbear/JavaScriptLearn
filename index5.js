const myArray = [1,2,3]
const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length : 3
}
console.log(myArray)
console.log(myObject)

const removerElement = myArray.pop()
console.log(myArray)
console.log(removerElement)


const addElement = myArray.unshift('addedelement')
console.log(myArray)

const delElement = myArray.shift()
console.log(myArray)