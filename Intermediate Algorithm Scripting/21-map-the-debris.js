function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  for (let prop in arr) {
    let orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
    );
    delete arr[prop].avgAlt;
    arr[prop].orbitalPeriod = orbitalPer;
  }
  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
