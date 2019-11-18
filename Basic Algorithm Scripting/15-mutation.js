function mutation(arr) {
  let checkStr = arr[0].toLowerCase().split("");
  let testStr = arr[1].toLowerCase().split("");
  for (let testEl in testStr) {
    if (checkStr.indexOf(testStr[testEl]) === -1) return false;
  }
  return true;
}

console.log(mutation(["hello", "he"]));
