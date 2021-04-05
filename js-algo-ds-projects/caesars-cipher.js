/*
EXERCISE:

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  //Store the alphabet and rot13 in a var (they re already sorted)
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  //Split each char of the str
  let strSplitted = str.split("");
  //Here we store the result
  let res = [];

  for (let char of strSplitted) {
    //If we find the letter in the alphabet
    if (alphabet.indexOf(char) >= 0) {
      //Store that index
      let indexAlphabet = alphabet.indexOf(char);
      //Search the stored indx in the rot13 alphabet and push it into res
      res.push(rot13Alphabet[indexAlphabet]);
    } else {
      //If we not find the index (-1) we push it too
      res.push(char);
    }
  }

  //Join everything :)
  return res.join("");
}

rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
