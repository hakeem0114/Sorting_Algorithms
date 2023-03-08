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


function bubbleSort(array){

    let swapped;
    do{
            for(let i=0; i< array.length-1; i++){
                if(array[i]>array[i+1]){
                    //swap positions using array destructing
                     [array[i], array[i+1]] = [array[i+1], array[i]]
                    swapped = true;
                }
                swapped = false;
            }

    }while(swapped = true)
    return array
}

const arr = [-6, 20,8,-2,4]
console.log(bubbleSort(arr))














console.log("***************************")