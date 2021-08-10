//7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
array = ["pawn","rook","queen","king","knight"]

word = array[0]

longestword = () =>{
for(i = 1; i < array.length; i++){
    if(word.length < array[i].length){
        word = array[i]
    }
}
return word
}
console.log(longestword())

//8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
var prompt = require('prompt-sync')();
var n = prompt('Pick a maximum character length ')

longestword = []

filterLongWords = () =>{
    for(i = 0; i < array.length; i++){
        if(array[i].length > n){
            longestword.push(array[i])
        }
    }
    return longestword
}
console.log(filterLongWords())