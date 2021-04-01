function smallestCommons(arr) {
  //Find min and max from arr
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  //Generate a range of nums from min and max
  let arrNums = [];
  for (min; min <= max; min++) {
    arrNums.push(min);
  }

  //Function that .every will operate on
  const smallestCommon = (currentVal) => n % currentVal === 0;
  let common = false;
  let n = max * (max - 1);

  //Checking the first value of n for the SCM.
  common = arrNums.every(smallestCommon);

  //Checking for a true result
  while (common === false) {
    n++;
    common = arrNums.every(smallestCommon);
  }

  return n;
}

smallestCommons([1, 5]);
