const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

copyOfA.c = 'abc'

console.log(objectA)

const car = {
    make: "Toyota", model: "Camry",
    startEngine: function () { console.log("Engine started"); }
};

console.log(car)

let n = parseInt(prompt("Введите максимальное число"));

for(let i = 0; i < n; i++) {
    if(n % 3 === 0) {
            console.log(i + " делится на 3");
    } else if(n % 5 === 0){
        console.log(i + " делится на 5");
    } else {
        console.log(i + "не делится на 3 и 5");
    }
}