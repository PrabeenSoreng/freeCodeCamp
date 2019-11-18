function titleCase(str) {
  str = str.toLowerCase();
  let modStr = str.split(" ").map(el => el[0].toUpperCase() + el.slice(1));
  return modStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
