/*
EXERCISE:

Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 */

//1. Split and map the given string of binary and parse it to decimal.
//2. Map again and for each element(decimals), convert it into characters .fromCharCode
//3. Join the array and return it
function binaryAgent(str) {
  const res = str
    .split(" ")
    .map((b) => parseInt(b, 2))
    .map((num) => String.fromCharCode(num))
    .join("");
  return res;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

//EXPECTED OUTPUT: Aren't bonfires fun!?
