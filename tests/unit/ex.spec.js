import { expect, test } from "vitest";
import words_pl from "../../src/views/Games/words_pl";
const sum = function sum(a, b) {
  return a + b;
};

test("Word to guess's length equal 5", () => {
  expect(words_pl[0]).length(5);
});
