const addStrings = require("./2_add_strings");

describe("Add string tests", () => {
  test("adding '11' + '123' should return '134'", () => {
    expect(addStrings("11", "123")).toBe("134");
  });
  test("adding '456' + '77' should return '533'", () => {
    expect(addStrings("456", "77")).toBe("533");
  });
  test("adding '0' + '0' should return '0'", () => {
    expect(addStrings("0", "0")).toBe("0");
  });
  test("adding '999' + '999' should return '1998'", () => {
    expect(addStrings("999", "999")).toBe("1998");
  });
});
