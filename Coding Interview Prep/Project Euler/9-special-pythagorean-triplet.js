function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n; a++) {
    for (let b = a; b < n; b++) {
      let c = n - a - b;
      if (c > 0) {
        if (c ** 2 == a ** 2 + b ** 2) return a * b * c;
      }
    }
  }
}

console.log(specialPythagoreanTriplet(120));
