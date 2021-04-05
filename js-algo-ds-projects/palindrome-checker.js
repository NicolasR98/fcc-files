/*
EXERCISE: 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

*/

//1.Convert str into arr
//2. Ignore any digit that are not a letter or number
//3. Create a copy of the arr and reverse it
//4. Compare the two arrays (they have to be in lowercase)and if they are the same, return true

function palindrome(str) {
    let regex = /[a-z0-9]/g
    let res = str.toLowerCase().match(regex);
    let reversedRes = [...res].reverse();
  
    return res.join("") === reversedRes.join("") ? true : false;
  
  }
  
  palindrome("race car")
  palindrome("A man, a plan, a canal. Panama")
  palindrome("0_0 (: /-\ :) 0-0")