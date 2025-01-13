// index.js

function hasTargetSum(array, target) {
  // Create a set to store numbers we have seen
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (let number of array) {
    // Calculate the complement
    const complement = target - number;

    // Check if the complement is already in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair is found, return false
  return false;
}

// Export the function for testing
module.exports = hasTargetSum;

/* 
  Pseudocode:
  1. Initialize an empty set to keep track of seen numbers.
  2. Iterate through the array:
      - Compute the complement (target - current number).
      - If the complement exists in the set, return true.
      - Otherwise, add the current number to the set.
  3. Return false if no pair is found after the loop.
*/

/* 
  Written Explanation:
  This function uses a set to store numbers as we iterate through the array. 
  For each number, we calculate its complement (the number needed to reach the target). 
  If the complement exists in the set, we return true. If not, we add the current number to the set. 
  This approach ensures we only loop through the array once, making it efficient.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}
