/*
EXERCISE:

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
  //Find min and max from arr
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  //Generate a range of nums from min and max
  let arrNums = [];
  for (min; min <= max; min++) {
    arrNums.push(min);
  }

  //Function that .every will operate on
  const smallestCommon = (currentVal) => n % currentVal === 0;
  let common = false;
  let n = max * (max - 1);

  //Checking the first value of n for the SCM.
  common = arrNums.every(smallestCommon);

  //Checking for a true result
  while (common === false) {
    n++;
    common = arrNums.every(smallestCommon);
  }

  return n;
}

smallestCommons([1, 5]);
