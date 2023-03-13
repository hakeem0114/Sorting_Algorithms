console.log("Cartesian Product")

/*
Given 2 finite non empty sets, find their cartesian products

constA = [1,2]
constB = [3,4]

AXB = [  1 3
         1 4
         2 3
         2 4
    ]

Pseudo Code:
1. Loop through elements in first array & 2nd
2. In the 2nd array, create a new array to hold:
    a = [i,j]
    newArray.push(a)
3. return newArray

*/

function cartesianProduct(arrA, arrB){
    const prod = []
    for(let i =0; i< arrA.length; i++){
        for(let j =0; j< arrB.length; j++){
          prod.push([arrA[i], arrB[j]])
        }

    }

    return prod;
}

const a = [1,2]
const b = [3,4,5]

console.log(cartesianProduct(a,b))


console.log("answer")

console.log("Big O is O(m*n) since it depends on length of array 1 & 2 ")
console.log("Space complexity is ")
console.log("***************************")