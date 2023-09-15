/* Exercise #2
Objective: Understand and Apply Destructuring in JavaScript.

Instructions:

Destructure the person object to extract the name and age properties into variables.
Use array destructuring to get the second and fourth items from the fruits array.
Extract the city and country properties from the address object nested within the person object using nested destructuring.
Starting Code: */

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const { name, age, address: {city, country} } = person;

console.log(name);
console.log(age);
console.log(city);
console.log(country);

const fruits = ['apple', 'banana', 'cherry', 'date'];

let [w, x, y, z] = fruits;

console.log(x);
console.log(z);


