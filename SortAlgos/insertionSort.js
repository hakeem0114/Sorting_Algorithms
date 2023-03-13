console.log("Insertion Sort")
/*
SE = sorted element
NTI = number to insert

Pseudo Code:

Insertion sort assumes the 1st number is sorted, so start sorting from index[1] not i[0]
=> #s on left should always be sorted first


*/
function insertionSort(arr){

    //Could be i=0 & arr.length -1
    for(let i =1;i< arr.length; i++){ //For loop to iterate through unsorted part of array
        
        let numberToInsert = arr[i] //Store NTI in each iteration = # on right

        let j = i-1  //Store Index of sorted element(s) = all elements left of NTI (can be more than 1)

        while(arr[j] > numberToInsert){  //Iterate through all sorted elements
            
            //If # on left > NTI, then move the # on left up an index
            arr[j+1] = arr[j] 

            j = j-1  //Resets index to compare # on left to NTI
            
        }

        //if # on left < NTI, 
        arr[j+1] = numberToInsert  //Insert numberToInsert to right of index

    }
    
}




const arr = [8, 20, -2 , 4, -6, 5]
insertionSort(arr)
console.log(arr)

console.log("Big O is O(n^2) due to 2 nested loops")
console.log("Space complexity is O(1) ")

console.log("***************************")