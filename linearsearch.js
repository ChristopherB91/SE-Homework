var prompt = require('prompt-sync')();

var n = prompt('What number are you looking for ')

let array = [12, 32, 4, 9, 5, -1, 100, 5, -90, 12]
var occur = 0
position = []
len=array.length

found=false
for(i=0; i<len; i++)
{
    for(j=i+1; j<len; j++)
    {
        if (array[i] > array[j])
        {
            temp=array[j]
            array[j]=array[i]
            array[i]=temp
        }
    }
    if(n==array[i]){
        found=true
        occur++
        position.push(i+1)
        // break;
    }
}
console.log(array)
if (found==true){
    console.log("number found in " + position + " " + " and occurs " +  occur + " times.")
    }
    else{
        console.log("number not found")
    }