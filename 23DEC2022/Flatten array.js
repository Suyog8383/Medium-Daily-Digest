let arr = [1, [2, 3], 4, [5, [6, 7]]];
let output = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(flattenArray(arr)); //[1, 2, 3, 4, 5, 6, 7]
