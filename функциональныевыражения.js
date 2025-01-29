const myFunction = function(a,b) {
    let c
    a = 5
    b = 5
    c = a + b
    return c
}

console.log(myFunction(5,5))

setTimeout(function() {
    console.log('timeouted message')
}, 1000)

