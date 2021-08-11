function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }

  return product;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l']
console.log(cartProduct(colors, sizes)) // [['blue', 'm'], ...];

// Time Complexity: O(n*m) => O(n^2)
// Space Complexity: O(n*m) => O(n^2)