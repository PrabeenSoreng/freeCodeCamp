// Mine Solution
function fearNotLetter(str) {
  str = [...str].map(el => el.charCodeAt());
  for (let i = 0; i < str.length; i++) {
    if (str[i] + 1 !== str[i + 1] && str[i + 1] !== undefined)
      return String.fromCharCode(str[i] + 1);
  }
  return undefined;
}

// Solution 2
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) return String.fromCharCode(code - 1);
  }
  return undefined;
}

// Solution 3
function fearNotLetter(str) {
  let compare = str.charCodeAt(0),
    missing;

  [...str].map((el, i) => {
    if (str.charCodeAt(i) == compare) ++compare;
    else missing = String.fromCharCode(compare);
  });
  return missing;
}

// Solution 4
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1)
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
  }
}

// Solution 5
function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++) {
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
    console.log(allChars);
  }

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

console.log(fearNotLetter("abceg"));
