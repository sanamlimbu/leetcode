/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 0, // buying day
    j = 1, // selling day
    profit = 0,
    maxProfit = 0;
  for (; j < prices.length; ) {
    // profitable ?
    if (prices[i] < prices[j]) {
      profit = prices[j] - prices[i];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      // change buying day
      i = j;
    }
    j++;
  }
  return maxProfit;
};

module.exports = maxProfit;
