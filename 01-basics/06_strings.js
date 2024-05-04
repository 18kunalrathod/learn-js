const name = "kunal";

const repoCount = 50;

// console.log(name + repoCount) 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('stephano-dr')
// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newStr = gameName.substring(0, 4) // include 0 index to 3rd index does not include 4th index
console.log(newStr)

const anotherStr = gameName.slice(-8, 4)
console.log(anotherStr)

const newStrOne = "  kunal  "
console.log(newStrOne)
console.log(newStrOne.trim()) // works on white spaces


const url = "https://kunal.com/kunal%20rathod"
console.log(url.replace('%20', '-')) // replace
console.log(url.includes('kunal')) // shows the keyword which is present or not

console.log(gameName.split('-'))