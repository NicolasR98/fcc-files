/*
EXERCISE: 

Convert the given number into a roman numeral.

*/

//1.Create an Object containing a key (roman number) value (number) pair
//2.For each key in romanNums we check if the given num is higher or equal than the current key value.
//3.If the given num is higher or equal, then sum the key into a var (roman) and substract the same key value to the num

function convertToRoman(num) {
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  for (let key in romanNums) {
    while (num >= romanNums[key]) {
      roman += key;
      num -= romanNums[key];
    }
  }
  return roman;
}

convertToRoman(36);
