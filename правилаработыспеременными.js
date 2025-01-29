'user strict'

function myFn() {
    a = true // Uncaught
    //referenceerror: a is not defined at myFn
    console.log(a)
}

myFn()

console.log(a)