const addBinary = require("./1_add_binary");

describe("Add binary tests", () => {
  test("adding '11' + '1' should return '100'", () => {
    expect(addBinary("11", "1")).toBe("100");
  });
  test("adding '1010' + '1011' should return '10101'", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
  test("adding '1110' + '1011' should return '11001'", () => {
    expect(addBinary("1110", "1011")).toBe("11001");
  });
});
