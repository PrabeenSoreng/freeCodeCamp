function palindrome(str) {
  let trimResult = str.toLowerCase().match(/[^-_,+%!^&$@#.:()*\s]/g);
  let trimStr = trimResult.join("");
  let trimRevStr = trimResult.reverse().join("");
  if (trimStr == trimRevStr) return true;
  else return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
