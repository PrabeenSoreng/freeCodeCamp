function truncateString(str, num) {
  if (num >= str.length) return str;
  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tisket A green and yellow basket", 8));
