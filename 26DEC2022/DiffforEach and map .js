const arr = [1, 2, 3, 4, 5, 6];
const forEach = arr.forEach((item) => item * 2);
console.log("@SN forEach", forEach); //@SN forEach undefined
const mapVal = arr.map((item) => item * 2);
console.log("@SN mapVal", mapVal); //@SN mapVal (6) [2, 4, 6, 8, 10, 12]

arr.forEach(myFun);
function myFun(item, index, arr) {
  arr[index] = item * 2;
}
console.log("@SN forEach", arr); //@SN forEach (6) [2, 4, 6, 8, 10, 12]
