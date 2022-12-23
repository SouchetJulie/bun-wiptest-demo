import { describe, expect, it } from "bun:test";
import { fizzBuzz } from "../fizzBuzz.js";

const data: [ number, string ][] = [
  [ 0, "0" ],
  [ 1, "1" ],
  [ 2, "2" ],
  [ 3, "FIZZ" ],
  [ 4, "4" ],
  [ 5, "BUZZ" ],
  [ 6, "FIZZ" ],
  [ 7, "7" ],
  [ 8, "8" ],
  [ 9, "FIZZ" ],
  [ 10, "BUZZ" ],
  [ 11, "11" ],
  [ 12, "FIZZ" ],
  [ 13, "13" ],
  [ 14, "14" ],
  [ 15, "FIZZBUZZ" ],
];


describe("FizzBuzz", () => {
  data.forEach(([ input, expected ]: [ number, string ]) => {
    it(`should return "${ expected }" when ${ input } provided`, () => {
      expect(fizzBuzz(input)).toBe(expected);
    });
  });
});
