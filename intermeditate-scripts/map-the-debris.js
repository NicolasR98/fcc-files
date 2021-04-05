/*
EXERCISE:

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.
*/


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(function (el) {
    return {
      name: el.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM)
      ),
    };
  });
}
