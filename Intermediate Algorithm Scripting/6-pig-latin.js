// Mine Solution
function translatePigLatin(str) {
  let strArr = [...str];
  let pigLatin = [];
  for (let el in strArr) {
    if (
      strArr[el] === "a" ||
      strArr[el] === "e" ||
      strArr[el] === "i" ||
      strArr[el] === "o" ||
      strArr[el] === "u"
    ) {
      if (el == 0) return str + "way";
      return (
        [...str]
          .splice(el)
          .concat(pigLatin)
          .join("") + "ay"
      );
    } else pigLatin.push(strArr[el]);
    if (el == strArr.length - 1) return str + "ay";
  }
}

// Solution 2
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

// Solution 3
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// Solution 4
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("rhythm"));
