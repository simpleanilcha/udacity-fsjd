import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

const numArr = [3, 4, 5, 6]
const wordArr = ['cat', 'dog', 'rabbit', 'bird']

// test for arrays
describe("Arrays suite test", () => {
  it('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
  });

  it('sholud concatinate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
  })

  it('should not contain the third index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
  })

  it('should no have a large number and be falsy', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
  })
})

// test for numbers
describe("Numbers suite test", () => {
  it('expect multiply 5 and 2 to equal 10', () => {
    expect(numbers.multiply(5, 2)).toBe(10);
  });

  it('expect sum 5 and 12 to >10', () => {
    expect(numbers.sum(5, 12)).toBeGreaterThan(10);
  });

  it('expect divide 5 and 10 to <10', () => {
    expect(numbers.divide(5, 10)).toBeLessThan(10);
  });

  it('expect square of 5 to >=25', () => {
    expect(numbers.square(5)).toBeGreaterThanOrEqual(25);
  });
})

// test for strings
describe("Strings suite test", () => {
  it('should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
  });
})