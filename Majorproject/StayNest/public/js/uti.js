// @codedropper
const person = { name: "John", age: 30 };
const { name = "Anonymous", job = "Unemployed" } = person;

console.log(name); // Output: John
console.log(job); // Output: Unemployed
