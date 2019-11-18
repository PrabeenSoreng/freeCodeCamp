// Mine Solution
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  return collection.filter(el => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (el[sourceKeys[i]] !== source[sourceKeys[i]]) return false;
    }
    return true;
  });
}

// Solution 2
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  return collection.filter(obj => {
    return sourceKeys
      .map(key => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce((a, b) => a && b);
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
