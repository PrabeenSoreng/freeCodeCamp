function repeatStringNumTimes(str, num) {
  if (num === 1) return str;
  else if (num <= 0) return "";
  else return repeatStringNumTimes(str, num - 1) + str;
}

console.log(repeatStringNumTimes("abc", 4));
