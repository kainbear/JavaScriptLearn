const person = {
    name : 'Bob',
    age : 25
}

const persone2 = person
persone2.age = 26
persone2.isAdult = true

console.log(person.age)
console.log(person.isAdult) // variation 1

const person2 = {
    name: 'bob',
    age: 25
}

const person3 = {...person2}

person2.name = 'alice'

console.log(person3.name)
console.log(person2.name) // variation 2

const person4 = {
    name: 'stas',
    age: 15
}

const person5 = JSON.parse(JSON.stringify(person4))

person5.name = 'john'

console.log(person5.name)
console.log(person4.name) // variation 3