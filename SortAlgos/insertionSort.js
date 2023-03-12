console.log("Insertion Sort")
/*
SE = sorted element
NTI = number to insert

Pseudo Code:

Insertion sort assumes the 1st number is sorted, so start sorting from index[1] not i[0]



*/
function insertionSort(arr){
    for(let i =1;i< arr.length; i++){
        
        let numberToInsert = arr[i]
        let j = i-1  //j = index of sorted element = prev

        while(j>=0 && arr[j] > numberToInsert){ 
            //move sorted element up 1 index if less than NTI
            arr[j+1] = arr[j] //next val = curr
            j = j-1
        }

        arr[j+1] = numberToInsert

    }
    
}




const arr = [8, 20, -2 , 4, -6, 5]
insertionSort(arr)
console.log(arr)

console.log("Big O is O() ")
console.log("Space complexity is ")

console.log("***************************")