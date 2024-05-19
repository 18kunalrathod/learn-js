
function sayName(){

    console.log("K")
    console.log("u")
    console.log("n")
    console.log("a")
    console.log("l")
    
}

// sayName ()

// function addTwoNumber(num1, num2){   // inside bracket is called parameters
//     console.log(num1 + num2)
// }

function addTwoNumber(num1, num2){   // inside bracket is called parameters
    // let result = num1 + num2
    // return result
    return num1+num2

}

const result = addTwoNumber(3, 5)   // when we the function its called argument callinside bracket is argument

// console.log("result:", result)


function loginUserMessage(username){

    if(username === undefined){
        console.log("Please enter a username")
        return
    }

    return `${username} Just logged in`
}

// console.log(loginUserMessage("Kunal"));



function calculateCartPrice(...num1) { // ... rest or spread operator // rest convert in array
 return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2400)) // output all valyue is array



const user = {
    username: "kunal",
    prices: 199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 399
})


const myNewArr = [200, 400, 100, 600];

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArr));
console.log(returnSecondvalue([200,300,400,500]));

