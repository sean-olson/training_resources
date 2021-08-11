const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) {
  console.log(el);
}

console.log(ids.has('abc'));

ids.delete('bb2');

console.log(ids);