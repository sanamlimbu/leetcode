const maxProfit = require("./3_best_time_to_buy_and_sell_stock");

describe("Max profit tests", () => {
  test("[7,1,5,3,6,4] should return '5'", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("[7,6,4,3,1] should return '0'", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
