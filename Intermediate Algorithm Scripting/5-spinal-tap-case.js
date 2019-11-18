function spinalCase(str) {
  // return str
  //   .split(/\s|_|(?=[A-Z])]/)
  //   .join("-")
  //   .toLowerCase();
  var firstLet = str.split("")[0];
  console.log(firstLet);
  str = str.slice(1, str.length);
  console.log(str);
  str = str.replace(/\s/g, "-");
  str = str.replace(/([A-Z])/g, "-$1");
  str = str.replace(/_/g, "-");
  str = str.replace(/-+/g, "-");
  return (firstLet + str).toLowerCase();
}

console.log(spinalCase("This_IsSpinal Tap"));
