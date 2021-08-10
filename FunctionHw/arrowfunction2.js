// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var array = [6, 10, 4, 5]
var sum = 0
var summ = 1

sumarray = () =>{

    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(sumarray())

multiplyarray = () =>{

    for (i = 0; i < array.length; i++) {
        summ *= array[i];
    }
    return summ
}
console.log(multiplyarray())