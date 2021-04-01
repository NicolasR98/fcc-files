/*
EXERCISE: 

Flatten a nested array. You must account for varying levels of nesting.
 */

const steamrollArray = (arr) => {
  if (arr instanceof Array) {
    return arr.length === 0
      ? []
      : //Using .concat it manages to clean up empty arrays
        steamrollArray(arr[0]).concat(steamrollArray(arr.slice(1)));
  }
  return [arr];
};

steamrollArray([[["a"]], [["b"]]]);
