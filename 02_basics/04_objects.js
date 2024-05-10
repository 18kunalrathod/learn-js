// const instagramUser = new Object() // singleton obj
const instagramUser = {} // non singleton

instagramUser.id = "123abc"
instagramUser.name = "John"
instagramUser.isLoggedIn = false

// console.log(instagramUser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullname : {
            firstname : "kunal",
            lastname : "rathod"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstname)

const obj1 = {1 : "a", 2 : "B"}
const obj2 = {3 : "a", 4 : "B"}
const obj4 = {5 : "a", 6 : "B"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)  // merge obj // giving empty obj because it like giving it as a taget

const obj3 = {...obj1, ...obj2}  // spread opertor // merge obj
console.log(obj3)

const users = [
    {
        id:1,
        email : "kunal@gmail.com"
    },
    {
        id:1,
        email : "kunal@gmail.com"
    },
    {
        id:1,
        email : "kunal@gmail.com"
    }
]

users[1].email
console.log(instagramUser)
console.log(Object.keys(instagramUser)) // accessing keys
console.log(Object.values(instagramUser)) // accessing values
console.log(Object.entries(instagramUser)) // covert key value in one array

console.log(instagramUser.hasOwnProperty('isLogged'))  // check its property