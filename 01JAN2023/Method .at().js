let arr = [1, 2, 3, 4];
console.log("@SN 1", arr[0]); //1
console.log("@SN 2", arr[arr.length - 2]); //3
console.log("@SN 3", arr.slice(-1)[0]); //4

console.log("@SN at()", arr.at(2)); //3
console.log("@SN at()", arr.at(3)); //4
