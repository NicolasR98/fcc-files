/*
EXERCISE: 

Return true if the passed string looks like a valid US phone number.

Valid US number expamples

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

//We use regex for this exercise because is the best tool for matching patterns in strings
//1."^(1\s?)?" Optional. At the beggining '1' with optional space 
//2."(\(\d{3}\)|\d{3})" It can be two options. only 3 numbers closed by '()' or without it.
//3. "[\s\-]?\d{3}" Optional Match one character of the group '[]'. After it match 3 numbers in a row.
//4. "[\s\-]?\d{4}$" Same as '3.' but at the end '$' matches 4 numbers in a row.
 
function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");