
const marvelHeros = ["spiderman", "Ironman", "thor"]
const dc = ["superman" , "batman", "flash"]

// marvelHeros.push(dc)

// console.log(marvelHeros) 

// const allHero = marvelHeros.concat(dc)

// console.log(allHero) // merge two array and creates new array

const allNewHeros = [...marvelHeros, ...dc] // worsk same as concat

// console.log(allNewHeros)

const anotherArr = [1 , 2, 3, [4, 5, 6], 7 , [6, 7, [ 4, 5]]]

let realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr)

console.log(Array.isArray("Kunal")); // checks it is array or nott
console.log(Array.from("Kunal")); // convert elements into array (obj , arr etc)
console.log(Array.from({name : "kunal"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2, score3)) // Returns a new array from a set of elements.