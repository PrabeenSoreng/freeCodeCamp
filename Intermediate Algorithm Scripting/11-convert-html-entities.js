// Mine Solution
function convertHTML(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  return str;
}

// Solution 2
function convertHTML(str) {
  const htmlEntities = {
    "&": "&apm;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot"
  };
  return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

// Solution 3
function convertHTML(str) {
  const htmlEntities = {
    "&": "&apm;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot"
  };
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce Gabbana"));
