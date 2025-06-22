// // // // let str = "ASAP Frontend"

// // // // for (let i = 0; i < 13; ++i)
// // // //     console.log (str[i])

// // function
// // // function greetuser (name, time) {
// // //     console.log (`Good ${time}, ${name}`)
// // // }

// // // greetuser ("Nathan", "morning")

// //   Regular function

// // function convert (num1) {
// // return num1 * 1.5

// // }
// // console.log (convert (500))

//     // Arrow Function

//     const convertAudToUsd = (dollars) => {
//         return dollars * 1.5
//     }

//     console.log ( convertAudToUsd (1000))

// let array = ["Apples", "Banana", "Egg", "Milk"] 

// console.log (array[0])

// console.log (array[array.length -1])

// array.push ("Bread")

// console.log (array)

// function convertUsdtoAud (dollars) {
//   return  dollars * 1.5
// }

// console.log (convertUsdtoAud (100))

// const convertAudToUsd = (dollars) => {
//     return dollars * 1.5
// }

// console.log (convertAudToUsd(100))  

let array = [20, 15, 10, 30]
// ["Apples","Banana", "Egg", "Milk"]
let filteredarray = array.filter ((element) => {
    console.log(element)
if (element <= 15)
    return true;
})

console.log (filteredarray)
