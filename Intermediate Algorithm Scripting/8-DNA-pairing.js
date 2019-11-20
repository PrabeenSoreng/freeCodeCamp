// Mine Solution
function pairElement(str) {
  let strArr = [...str];
  let resultArr = [];
  strArr.forEach(el => {
    if (el == "A") resultArr.push(["A", "T"]);
    else if (el == "T") resultArr.push(["T", "A"]);
    else if (el == "G") resultArr.push(["G", "C"]);
    else resultArr.push(["C", "G"]);
  });
  return resultArr;
}

// Solution 2
function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let strArr = str.split("");
  return strArr.map(x => [x, pairs[x]]);
}

console.log(pairElement("GCG"));
