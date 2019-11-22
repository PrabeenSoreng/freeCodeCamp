// Mine Solution
function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (Object.keys(collection[i]).includes(pre) && collection[i][pre])
      continue;
    else return false;
  }
  return true;
}

// Solution 2
function truthCheck(collection, pre) {
  return collection.every(el => {
    return el.hasOwnProperty(pre) && el[pre];
  });
}

// Solution 3
function truthCheck(collection, pre) {
  return collection.every(el => el[pre]);
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
);
