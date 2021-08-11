function cartProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }

    for (const setBEl of setB) {
      product.push([...setAEl, setBEl]);
    }
  }

  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l', 'xl']
const styles = ['round neck', 'v neck'];
console.log(cartProduct(colors, sizes)) // [['blue', 'm'], ...];

console.log(cartesian(colors, sizes, styles));
// Time Complexity: O(n^x)
// Space Complexity: O(n^x)