//5. Write a function that returns the number of arguments passed to the function when called
base = 0
level = 0

function numberOfArguments(base,level){
    for (var i = 1; i <= arguments.length; i++) {
        base++;
      }
      return base
}
console.log(numberOfArguments(base,level))