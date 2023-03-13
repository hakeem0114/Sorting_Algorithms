console.log("Merge Sort")

/* Given an array of integers, sort the array
const arr = [-6, 20,8,-2,4]

bubbleSort(arr) => answer
*/

/*
Steps:
1. Divide array from the middle, into sub arrays, till each contains only one element.
    * An array with 1 element = sorted
2. Repeatedly merge all sub arrays unil they all become one array

Pseudo Code:
1. For elements in the arrays
    a. Divide into 2 arrays, Math.Floor((arr.length)/2)
    b. if newArrays.length >1, divide again in the middle
       else{
            if (arr[i] > arr[i+1]){
                push single element into the new array
            }

       }
*/

function mergeSort(arr){

    //Base Case to exit recursion
    if(arr.length <= 1){
        return arr
    }

    //Split arr in the middle & instantiate a left & right array of elements
    let middleIndex = Math.floor(arr.length-1 /2)
    
    let leftArray = arr.slice(0, middleIndex)
    let rightArray = arr.slice(middleIndex)  

    return merge(mergeSort(leftArray), mergeSort(rightArray))
         // [-6, 20,8]  , [-2,4, -15, 110] 
         // [-6, 20,8]   , [-2,4, -15, 110]
}


//Function to sort & push values into new sorted array
function merge(leftArr, rightArr){
    const sortedArr =[]

    //Run  while left & right arr aren't empty == truthy
    while( leftArr.length && rightArr.length){
        
        //Sort values
        if(leftArr[0] <= rightArr[0]){
        // if (-6 <= -2), push -6 into sortedArray [] & remove it from left array
         sortedArr.push(leftArr.shift())  //.shift removeds & returns first element in arr
        }else{
            //leftArr[0] >= rightArr[0]
            sortedArr.push(rightArr.shift())
        }
    }

    //Merges values using spread operator with sorted values
    return [...sortedArr, ...leftArr, ...rightArr]
           // [ most negative #, sortedLeft, sortedRight]
}


const arr = [-6, 20,8,-2,4, -15, 110]
console.log(mergeSort(arr))

console.log("Big O is O(nlogn) for while loop & halving input on each iteration")
console.log("Space complexity is O(n) since 2 halves are done in the the recursion = 1/2 + 1/2 = n")

console.log("***************************")