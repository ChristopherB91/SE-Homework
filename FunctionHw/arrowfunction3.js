//6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var prompt = require('prompt-sync')();
var n = prompt('Give me a word ')
var reverse = ""

reverseString = () =>{
    for(i = n.length - 1; i >= 0; i--){
        reverse += n[i]
    }
    return reverse
}
console.log(reverseString())