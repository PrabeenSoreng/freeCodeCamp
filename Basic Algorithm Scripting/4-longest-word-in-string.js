function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWordLength = 0;
  for (let word of words)
    if (word.length >= longestWordLength) longestWordLength = word.length;
  return longestWordLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
