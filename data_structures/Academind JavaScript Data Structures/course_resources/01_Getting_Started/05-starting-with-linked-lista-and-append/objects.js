const person = {
  firstName: 'Max',
  age: 31,
  hobbies: ['Sports', 'Cooking'],
  age: 32,
  greet() {
    console.log('Hi, I am ' + this.firstName);
  },
};

person.lastName = 'Schwarz';

delete person.age;

console.log(person);
person.greet();
