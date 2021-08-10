//1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.

var prompt = require('prompt-sync')();
// var n = prompt('Give me one number ')
// var m = prompt('Give me another number ')

// maxOfTwoNumbers = () => {
//     if(n > m){
//         return n
//     }
//     if(m > n){
//         return m
//     }
// }
// console.log(maxOfTwoNumbers())


// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// var n = prompt('Give me one number ')
// var m = prompt('Give me another number ')
// var b = prompt('Give me another number ')

// maxOfThree = () => {
//     if(n > m && n > b){
//         return n
//     }
//     if(m > n && m > b){
//         return m
//     }
//     if(b > n && b > m){
//         return b
//     }
// }
// console.log(maxOfThree())

// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
vowel = false
var c = prompt('Choose a character and I will tell you if it is a vowel ')

array = [97, 101, 105, 111, 117, 65, 69, 73, 79, 85]

isCharacterAVowel = () =>{
    for(i = 0; i < array.length; i++){
    if(c.charCodeAt(c) == array[i]){
        vowel = true
        return true
    }
  }
  if(vowel==true){
      return true
  }
  else{
      return false
  }
}
console.log(isCharacterAVowel())