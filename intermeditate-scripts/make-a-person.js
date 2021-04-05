/*
EXERCISE:

Fill in the object constructor with the following methods below:
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
 
*/


const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.setFirstName = function (first) {
    fullName = `${first} ${fullName.split(" ")[1]}`;
  };

  this.setLastName = function (last) {
    fullName = `${fullName.split(" ")[0]} ${last}`;
  };

  this.setFullName = function (newFullName) {
    fullName = newFullName;
  };

  this.getFullName = function () {
    return fullName;
  };

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
};

const bob = new Person("Bob Ross");
bob.setFirstName("Haskell");
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.getFullName();
