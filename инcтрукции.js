// Иснтрукция заканчивается ;
// Точку с запятой можно опускать ;

function myFn(a) {
    console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3) // 5
myFn(b) // true
myFn(c = c + 1) // 11
myFn(c = c + 1;) // UncaughtSyntaxError
myFn(let d) // UncaughtSyntaxError