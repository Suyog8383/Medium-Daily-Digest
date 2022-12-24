const foo = null ?? "default value";
console.log(foo); // expected output: "default value"

const baz = false ?? 42;
console.log(baz); // expected output: 42

const foo1 = false ?? "default value";
console.log(foo1); // expected output: false

const baz1 = 0 ?? 42;
console.log(baz1); // expected output: 0

const obj = { name: "Version 1" };

console.log(obj.name?.toUpperCase() ?? "not available"); // "VERSION 1"
console.log(obj.address?.toUpperCase() ?? "not available"); // "not available"
