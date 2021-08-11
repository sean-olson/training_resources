function knapsack(elements, capacity) {
  const sack = { items: [], value: 0, weight: 0};
  let remainingCapacity = capacity;

  for (const el of elements) {
    if (el.weight <= remainingCapacity) {
      sack.items.push(el);
      sack.value += el.value;
      sack.weight += el.weight;
      remainingCapacity -= el.weight;
    }
  }

  return sack;
}

const items = [
  { name: 'b', value: 6, weight: 8 },
  { name: 'a', value: 3, weight: 3 }, 
  { name: 'c', value: 10, weight: 3 },
];
const maxCap = 8;

const sack = knapsack(items, maxCap);
console.log(sack);

// 0-1 Knapsack Problem