function bouncer(arr) {
  let resultArr = [];
  arr.forEach(el => {
    if (el) resultArr.push(el);
  });
  return resultArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
