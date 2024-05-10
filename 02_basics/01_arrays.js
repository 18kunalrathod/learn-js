//array
const myArr = [0,1,2,3,4,5] 

// array is an object
// collection of multiple elements and aaray is resizeable
// it can be mix of element we can add string, boolean or number
// to access array we need index

const myHero = ["spiderman", "supperman"]

const myArr2 = new Array (1,2,3,4,5)

// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);  // push add elements in the last element

// myArr.pop() // .pop removes the last element

// myArr.unshift(9)
// console.log(myArr) // .unshift adds element in the first index of array

// myArr.shift()
// console.log(myArr) //  removes the first element of the array

// console.log(myArr.includes(9)) // questionair method in which we ask question to array 
// includes show value in boolean

// console.log(myArr.indexOf(3))

const newArr = myArr.join() // covert array into string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // returns a copy of section of an array

console.log(myn1)
console.log("B ", myArr);

// splice

const myn2 = myArr.splice(1, 3) // manupliate orignal array 
// revmoves element from an array and insert new element if necessary
console.log("c ", myArr);
console.log(myn2)