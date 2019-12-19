function largestPalindromeProduct(n) {
  let count = 1;
  let lno = "";
  // Getting the maximum and minimum number
  while (count <= n) {
    lno += "9";
    count++;
  }
  // let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
  let max = +lno;
  let min = (max + 1) / 10;

  //To store the result
  let res = [];

  //Starting the loop from max to min
  for (let i = max; i >= min; i--) {
    //Another loop
    for (let j = max; j >= min; j--) {
      //Getting the product
      let num = i * j;

      //Reversing the number
      let numReverse = [...String(num)].reverse().join("");

      //Checking for palindromic number
      if (num == numReverse) {
        //Pushing the number into array and breaking the loop for efficiency
        res.push(num);
        break;
      }
    }
  }
  return Math.max(...res);
}

console.log(largestPalindromeProduct(2));
