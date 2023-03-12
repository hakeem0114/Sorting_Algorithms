console.log("Bubble Sort")

/* Given an array of integers, sort the array
const arr = [-6, 20,8,-2,4]

bubbleSort(arr) => answer
*/

//Pseudo Code
//If current > next, swap, else & compare the next two
//Repeat the swap until current value > next value
/*
let swapping;
do{
    Loop through each elements of array
        Check if the leftVal < rightVal{
            swap
          return swapping = true
        }else{ return swapping = false;}
}while(swapping = true)


*/

function bubbleSort(arr){
  let swapped  //Function closed variable to keep track of swap state

  do{
      swapped = false //swapped state is false if for loop fails

      for (let i=0; i< arr.length -1; i++){
        if(arr[i] > arr[i+1]){
          //swap 
          
          //Temp var to swap 
          // temp  = arr[i] 
          // arr[i]  = arr[i+1] 
          // arr[i+1] = temp 

          //Array destructuring
          [arr[i], arr[i+1]] = [arr[i+1],arr[i]] //
          swapped = true //swap state is true if for loop passes
        }
      }

  }while (swapped) //Runs as long as swapped is truthy = true
}

const arr = [8, 20, -2 , 4, -6, 5]

bubbleSort(arr)
console.log(arr)

console.log(" Big O = O(n^2) since a for loop is nested into a do while ")
console.log("Space Complexity = O(1) since input does not add to memory")


console.log("***************************")