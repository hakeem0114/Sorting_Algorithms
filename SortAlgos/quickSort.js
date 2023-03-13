console.log("Quick Sort")

/* Given an array of integers, sort the array
const arr = [-6, 20,8,-2,4]

quickSort(arr) => answer
*/

/*
How it works:
1. Identify pivot element in array  
    a. Pick 1st element as pivot OR
    b. Pick last element as pivot  OR  (I PICKED THIS)
    c. Pick random element as a pivot OR
    d. Pick median as pivot 


2. Put everything < than pivot into a left array & 
    everything  > than pivot into right array

3. Repeat the process for each individual "left" & "right" array 
    till you have an array of length 1 => Final Sorted ==> BASE CONDITION TO EXIT LOOP

4. Concatenate the left array, pivot & right array till 1 remains

************************************************
PseudoCode: -6, 20, 8, -2, 4

1. Pivot  = 4  (Last element)

2.  while(arr.length != 1)
    a. leftArr = -6, -2  < 4
    b. rightArr = 8, 20   > 4

3. while(arr.length != 1)
    leftArr: Pivot = -2 (Last element)
    a. leftArr1 = -6
     
    Since arr.length = 1, stop loop for left side

4. Repeat for right side

5. After both sides with their pivots have reached the base condition of: arr.length = 1,
   concatenate (combine the arrays into 1) them up & return the array.
   return leftArray.concay(rightArray)
    
*/

function quickSort(arr){
    //Base/ Edge Case to stop exit  
    if (arr.length <= 1){  //If the original array only has 1 value now, 
        return arr;
    }    

    let pivot = arr[arr.length -1] //Last element's value
    let left =[]
    let right = []

    // //Left & right array
    // for (let i=0; i< arr.length -1; i++){  // Loops from index[0] -> last index
    //     if(arr[i] < pivot){
    //         left.push(arr[i])
    //     }else{
    //         right.push(arr[i])
    //     }
    // }

     //For in  = classic for loop = returns index
     //For of = return elements/ values
    for(let element of arr.slice(0, arr.length-1)){  //Loop from 1st to last element in array using splice or slice
        if( element < pivot){
            left.push(element)
        }else{
            right.push(element)
        }
    }


    //Re-run left & right array sorts before concatenating their #s into 1 array
    return [...quickSort(left), pivot, ...quickSort(right)]   //spreads values from sorts as a new array of elements
    //      [ -15, -6, -2 ,     4     ,  8, 20, 110]
}


const arr = [-6, 20,8,-2,4,110, -15]

console.log(quickSort(arr))

console.log("Big O is O() ")
console.log("Space complexity is ")
console.log("***************************")