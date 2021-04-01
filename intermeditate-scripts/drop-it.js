/*
EXERCISE:

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
  //Check if length 0 or the first value of func is true
  if (arr.length === 0 || func(arr[0])) {
    return arr;
  }

  //Else shift a value from arr and repeat through recursion
  arr.shift();
  return dropElements(arr, func);
}

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
