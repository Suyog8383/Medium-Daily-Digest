console.log("11" - 1); //10
console.log("11" + 1); //111(here + opreator is concatenate the string)
console.log("11" * "2"); //22
console.log(1 + "11"); //111
console.log(2 * "11"); //22
console.log(0 === [[[0]]]); //false
console.log(0 == [[[0]]]); //true
console.log(0 === "0"); //false
console.log(0 == "0"); //true
console.log([1, [2, [3, [4, [5]]]]].toString()); //1,2,3,4,5

const a = Number(1);
const b = Number(2);
const c = "1";
const d = "2";

console.log(typeof a); //Number
console.log(typeof c * d); //NAN
console.log(typeof a * c); //NAN
console.log(a * b == c * d); //true
console.log(a * b === c * d); //true

console.log("1" - "2" + "3" + "4" * "5");
/* "1" - "2" + "3" + "20"
"1" - "2320"
"-1320" */

const slow = new Promise((resolve) => {
  setTimeout(resolve, 200, "slow");
});
const instant = new Promise((resolve) => {
  setTimeout(resolve, 0, "instant");
});
const quick = new Promise((resolve) => {
  setTimeout(resolve, 50, "quick");
});
const result = Promise.all([slow, quick, instant]);
result.then((res) => {
  console.log(res);
});
//[slow,quick,instant]

var a1 = { name: "RKstar" }; //both store at different address
var b1 = { name: "RKstar" };
console.log(a1 === b1); // false
console.log(a1 == b1); // false
