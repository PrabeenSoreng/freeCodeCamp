function rot13(str) {
  let cipherStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      cipherStr += str.charAt(i);
      continue;
    }
    let asciiNum = str.charCodeAt(i) + 13;
    if (asciiNum > 90) {
      let diff = asciiNum - 90;
      asciiNum = 65 + diff - 1;
    }
    cipherStr += String.fromCharCode(asciiNum);
  }
  return cipherStr;
}

console.log(rot13("SERR PBQR PNZC"));
