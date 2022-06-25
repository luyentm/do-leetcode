/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let flag = false;
  let index = 0;
  while (index < nums.length - 1) {
    if (nums[index] <= nums[index + 1]) {
    } else {
      if (!flag) {
        flag = true;
        if (!nums[index - 1]) {
          nums[index] = nums[index + 1];
        } else if (nums[index - 1] && nums[index - 1] <= nums[index + 1]) {
          nums[index] = nums[index - 1];
        } else if (!nums[index + 2]) {
          nums[index + 1] = nums[index];
        } else if (nums[index + 2] && nums[index] <= nums[index + 2]) {
          nums[index + 1] = nums[index];
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    index++;
  }

  if (index == nums.length - 1) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
console.log(checkPossibility([1, 2, 3, 4, 5, 1, 4]));

1, 2, 3, 4, 5, 1, 4;

1, 2, 3, 4, 1, 1, 4;
1, 2, 3, 4, 5, 5, 4;
