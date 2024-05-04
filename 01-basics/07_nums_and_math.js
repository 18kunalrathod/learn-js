// numbers and maths

const score = 180;
// console.log(score)

const balance = new Number (100);
// console.log(balance);

// console.log(typeof (balance.toString()))
// console.log(balance.toString().length)
// console.log(balance.toFixed(1)) // decimal value


const otherNumber = 123.5966

// console.log(otherNumber.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')) // in indian number standards


// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++


console.log(Math);
// console.log(Math.abs(-4)); // absolute value negative turns into positive;
// console.log(Math.round(4.6)) // round off
// console.log(Math.ceil(4.2)) // ceiling value - choice of roundoff which is to be the value
// console.log(Math.floor(4.2)) // floor value - choice of roundoff which is to be the value

// console.log(Math.min(4,5,3,1)) //min value
// console.log(Math.max(4,5,3,1)) //max value

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1) // +1 is to avoid zero

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min)


