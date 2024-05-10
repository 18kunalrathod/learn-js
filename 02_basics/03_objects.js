// objects is a key value pair


// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kunal",
    fullname: "Kunal",
    [mySym ]: "myKey1",  // use square bracket for symbol
    age: 27,
    location: "Bangalore",
    email: "kunal@google.com",
    isLoggedIn:false,
    lastloginDays : ["Momday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // both are meant for accessing object
// console.log(JsUser["fullname"]) // cant use dot notation
// console.log(JsUser[mySym]) // 


JsUser.email = "kunal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kunal@facebook.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello World")
}

JsUser.greeting2 = function(){
    console.log(`"Hello World", ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())