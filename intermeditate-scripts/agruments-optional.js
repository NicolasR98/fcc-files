/*
EXERCISE: 

Create a function that sums two arguments together. 

If only one argument is provided, then return a function that expects one argument and returns the sum.

If either argument isn't a valid number, return undefined.
*/

//1.Check if the arguments are numbers
//2.While the args are numbers we do
  //A. Check if there is more than one arg, if true the reduce and sum values
  //B. If there is one arg, we do the currying technique.

function addTogether(...args) {
  const isNumber = args.every((arg) => typeof arg === "number");

  while (isNumber) {
    if (args.length > 1) {
      return args.reduce((acc, ele) => acc + ele);
    }
    return function (x) {
      if (Array.isArray(x)) {
        return undefined;
      }
      return args[0] + x;
    };
  }
  return undefined;
}

addTogether(2, 3)
addTogether(5)(7)
addTogether(2)([3]);
