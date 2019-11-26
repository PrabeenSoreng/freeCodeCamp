function updateInventory(arr1, arr2) {
  let currentInv = arr1.reduce((initial, cur) => {
    initial[cur[1]] = cur[0];
    return initial;
  }, {});

  let newInv = arr2.reduce((initial, cur) => {
    initial[cur[1]] = cur[0];
    return initial;
  }, {});

  let updatedInventory = {};
  let updatedKeys = [
    ...new Set(Object.keys(currentInv).concat(Object.keys(newInv)))
  ];
  updatedKeys = updatedKeys.sort((a, b) => a.localeCompare(b));
  for (let item of updatedKeys) {
    if (currentInv.hasOwnProperty(item) && newInv.hasOwnProperty(item)) {
      updatedInventory[item] = currentInv[item] + newInv[item];
    } else if (currentInv.hasOwnProperty(item))
      updatedInventory[item] = currentInv[item];
    else updatedInventory[item] = newInv[item];
  }
  return updatedKeys.reduce((i, key) => {
    i.push([updatedInventory[key], key]);
    return i;
  }, []);
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
