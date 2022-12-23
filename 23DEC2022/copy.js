//Shallow Copy-same reference
let obj1 = { name: "suyog", city: "pune" };
let obj2 = obj1;
obj1.name = "kiran";
console.log(obj1, obj2); // kiran kiran

//Deep copy-different reference
let originalVal = 10;
let copy = originalVal;
originalVal = 20;
console.log(originalVal, copy); //20 10

//Now, Let's see how to make a copy of an object and array in Js.

let obj3 = { name: "suyog", city: "pune" };
let obj4 = Object.assign({}, obj3);
obj3.name = "kiran";
console.log(obj3, obj4); //kiran suyog

let obj5 = { name: "suyog", city: "pune" };
let obj6 = { ...obj5 };
obj5.name = "kiran";
console.log(obj5, obj6); //kiran suyog
