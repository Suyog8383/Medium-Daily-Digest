const nums = [1, 2, 3];
function permutation(nums, final = [], temp = []) {
  if (nums.length === 0) {
    temp.push([...final]);
  }
  for (let i = 0; i < nums.length; i++) {
    final.push(nums[i]);
    const choises = nums.filter((num, index) => index !== i);
    permutation(choises, final, temp);
    final.pop();
  }
  return temp;
}
console.log(permutation(nums));
