let array = [1, 2, 3, 4, 5];
let array2 = array.map((item) => item * 2);
console.log(array2);

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = arr.filter((item) => item > 2);
console.log(arr2);

let arrr = [1, 2, 3, 4, 5, 6];
let arrr2 = arrr.reduce((a, b) => {
  return a + b;
}, 0);
console.log(arrr2);

const nums = [1, 2, 3, 4];
const addThree = nums.map((num, index, nums) => {
  console.log("This is each element: ", num);
  console.log("This is each element's index: ", index);
  console.log("This is whole array: ", nums);
  return num + 3;
});
console.log(addThree);
// outputs: [4,5,6,7]

/* const nums = [1, 2, 3, 4];
const moreThanTwo = nums.filter((num, index, nums) => {
  console.log("This is each element: ", num);
  console.log("This is each element's index: ", index);
  console.log("This is whole array: ", nums);
  return num > 2;
});
console.log(moreThanTwo); */
// outputs: [3,4]
/* 
const nums = [1, 2, 3, 4];
const sum = nums.reduce((accumulator, num) => {
  console.log("This is result after each iteration(starting from 0): ", num);
  return accumulator + num;
}, 0); */
