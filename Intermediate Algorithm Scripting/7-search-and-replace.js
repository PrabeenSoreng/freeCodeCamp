// Mine Solution
function myReplace(str, before, after) {
  let regExp = new RegExp(before, "i");
  if (/^[A-Z]/.test(str.match(regExp)[0]))
    return str.replace(
      regExp,
      after.substr(0, 1).toUpperCase() + after.substr(1)
    );
  return str.replace(regExp, after);
}

// Solution 2
function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase())
    after = after.charAt(0).toUpperCase() + after.slice(1);
  str = str.replace(before, after);
  return str;
}

// Solution 3
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) after = after[0].toUpperCase() + after.substr(1);
  else after = after[0].toLowerCase() + after.substr(1);

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped")
);
