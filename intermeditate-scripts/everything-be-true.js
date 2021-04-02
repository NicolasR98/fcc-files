/*
EXERCISE:

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

*/

//1.Iterate through collection
//2. Check if each item have "pre" as a key argument
//3. Check if "pre" value in it, is falsy or truthy

function truthCheck(collection, pre) {
  return collection.every((obj) =>
    pre in obj ? (!!obj[pre] ? true : false) : false
  );
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
