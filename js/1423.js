/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let k_array = cardPoints.slice(0, k);
  let max = k_array.reduce((partialSum, a) => partialSum + a, 0);
  let sum = max;
  for (let index = 0; index < k; index++) {
    sum =
      sum -
      cardPoints[k - 1 - index] +
      cardPoints[cardPoints.length - 1 - index];
    if (max < sum) {
      max = sum;
    }
  }

  return max;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(
  [
    99, 82, 25, 56, 39, 77, 22, 58, 64, 77, 19, 36, 93, 14, 19, 12, 94, 76, 93,
    24, 92, 67, 18, 37, 37, 60, 87, 28, 64, 7, 29,
  ].length
);
console.log(
  maxScore(
    [
      99, 82, 25, 56, 39, 77, 22, 58, 64, 77, 19, 36, 93, 14, 19, 12, 94, 76,
      93, 24, 92, 67, 18, 37, 37, 60, 87, 28, 64, 7, 29,
    ],
    27
  )
);
