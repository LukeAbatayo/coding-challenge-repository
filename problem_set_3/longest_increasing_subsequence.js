const lengthOfLIS = (nums) => {
  const numsLIT = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let temp = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (
        nums[i] !== nums[j] &&
        nums.indexOf(nums[i]) < nums.indexOf(nums[j]) &&
        temp < nums[j]
      ) {
        count++;
        temp = nums[j];
      }
    }
    numsLIT.push(count);
  }

  var largestNumber = numsLIT[0];

  for (var i = 0; i < numsLIT.length; i++) {
    if (numsLIT[i] > largestNumber) {
      largestNumber = numsLIT[i];
    }
  }

  return largestNumber;
};

const inputNumbers = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(inputNumbers));
