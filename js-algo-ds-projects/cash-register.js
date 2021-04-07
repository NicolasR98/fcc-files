/*
EXERCISE:

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument
(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

*/


//Define the denomination of the US currency into cents for simplicity.
const DENOMINATION = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  let toCents = (num) => Math.round(num * 100);

  let changeSum = toCents(cash) - toCents(price);

  //Create a copy of changeSum
  let changeSumCheck = changeSum;

  //Here goes the final result of change and status
  let change = [];
  let status = "";

  //Accumulator for the CID
  let cidSum = 0;

  //Filter the CID elements that are different than 0
  //Reverse the array, so starts with the high value currency
  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    //Denomination of the currency
    let denoName = elem[0];

    //Sum of the currency of CID (in cents)
    let currSum = toCents(elem[1]);
    cidSum += currSum;
    let amount = 0;

    while (changeSum >= DENOMINATION[denoName] && currSum > 0) {
      amount += DENOMINATION[denoName];
      changeSum -= DENOMINATION[denoName];
      currSum -= DENOMINATION[denoName];
    }
    if (amount !== 0) {
      change.push([denoName, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum === 0 && changeSumCheck === cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
