// Solution 1
function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let candidate = max;

  let smallestCommon = function(low, high) {
    function lcm(l, h) {
      if (h % l == 0) return h;
      else return lcm(l, h + high);
    }
    return lcm(low, high);
  };
  for (let i = min; i <= max; i++) candidate = smallestCommon(i, candidate);

  return candidate;
}

// Solution 2
function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  function range(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) arr.push(i);
    return arr;
  }

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;
  range(min, max).forEach(n => {
    multiple = lcm(multiple, n);
  });
  return multiple;
}

console.log(smallestCommons([2, 10]));
