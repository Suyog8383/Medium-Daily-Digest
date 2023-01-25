let arr = [1, 1000, 40, 30];
arr.sort();
console.log("@SN ", arr); //[1, 1000, 30, 40]
let arr2 = [1, 1000, 40, 30];
arr2.sort((a, b) => a - b);
console.log("@SN asending", arr2); //[1, 30, 40, 1000]
let arr3 = [1, 1000, 40, 30];
arr3.sort((a, b) => b - a);
console.log("@SN desending", arr3); //[1, 30, 40, 1000]
