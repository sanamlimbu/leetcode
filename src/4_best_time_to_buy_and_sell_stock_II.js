/**
 * @param {number[]} prices
 * @returns {number}
 */
// Peak and valley problem, sum of all the peaks is solution
var maxProfit = function (prices) {
  let i = 0, // buying day
    j = 1, // selling day
    totalProfit = 0;
  for (; j < prices.length; ) {
    // profitable ?
    if (prices[i] < prices[j]) {
      totalProfit += prices[j] - prices[i];
      i++;
    } else {
      i = j;
    }
    j = i + 1;
  }
  return totalProfit;
};

module.exports = maxProfit;
