console.log("Tower Of Hanoi")

/*
Problem:
https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/

Rod A ,   Rod B,   Rod C
_                 Stack
__                 them
___                 here

*/


/*
Pseudo Code:
1. Shift "n-1" = 2 disks from "rod A" to "rod B" using C
2. Shift last disk from rod A to rod C
3. Shift n-1 = 2 disks from rod B to rod C, using rod A


*/



function towerOfHanoi(disc, fromRod, toRod, usingRod){

    //Base Case for recursive solution 
    //3rd pseudo code
    if(disc == 1){
        console.log(`Move disc 1 from ${fromRod} to ${toRod}`)
        return 
    }

    //1st psuedo code: top disk from rod A to B, using C
    towerOfHanoi(disc-1, fromRod, usingRod, toRod)
    console.log(`Move disc ${disc}  from ${fromRod} to ${toRod}`)

    //3rd psuedo code: shift existing discs on B to C, using A
    towerOfHanoi(disc-1, usingRod, toRod, fromRod)

}

let numOfDiscs = 3
//toRod = last= C
//fromRod = first rod = A
//usingRod = B


towerOfHanoi(numOfDiscs, "A","C","B") 
console.log("answer")

console.log("Big O is O(2^n) since the input incrases the # of statements per iteration")
console.log("Space complexity is O(n)")
console.log("***************************")