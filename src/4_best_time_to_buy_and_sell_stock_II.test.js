const maxProfit = require("./4_best_time_to_buy_and_sell_stock_II");

describe("Max profit tests", () => {
  test("[7,1,5,3,6,4] should return '7'", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });
  test("[1,2,3,4,5] should return '4'", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
  test("[7,6,4,3,1] should return '0'", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
