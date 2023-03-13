console.log("Climbing Staircase")

/*

Given a staircase of n steps, count the # of distinct ways to climb
You can climb 1 or 2 steps at a time.

n=1, climbingStairCase(1) = 1
n=2, climbingStairCase(2) = 2    |  (1,1), (2)
n=3, climbingStairCase(3) = 3   | (1,1,1) , (1,2), (2, 1) = 3 ways

*/

/* Can only climb n+1 & n+2 steps => Numbers look similar to fibonnacci */

function climbingStairCase(steps){

    const ways = [1,2] //2 ways

    for(i=2; i<steps;i++){ //Start at 3rd index[2] due to 1st 2 steps
        ways[i] =  ways[i-1] + ways[i-2]
        //#ofSteps = (1) step + (2) step
     }
 
    return ways[steps-1] // ways[1-1] & ways[2-1]

}


console.log(climbingStairCase(1))
console.log(climbingStairCase(2))
console.log(climbingStairCase(5))

console.log("Big O is O(n) ")
console.log("Space complexity is O(n) ")
console.log("***************************")