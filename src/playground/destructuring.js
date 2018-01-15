const person = {
  name: 'haiyang',
  age: 26,
  location: {
    city: 'SF',
    temp: 92
  }
};

const { name = 'Anon', age } = person;
const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// if (city && temperature) {
//   console.log(`${city} is ${temperature}`);
// }

const address = ['1 vista montana', 'San jose', 'CA', '94085'];

const [, currentCity, state] = address;

console.log(`You are in ${currentCity} ${state}`)

