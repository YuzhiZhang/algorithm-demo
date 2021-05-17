import {
  firstMissingPositive,
  firstMissingPositive2Way,
} from './FirstMissingPositive.js';
test('first missing positive 1', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});

test('first missing positive 2', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});

test('first missing positive 3', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});

test('first missing positive 4', () => {
  expect(firstMissingPositive([1, 2, 3, 4, 5, 6, 7])).toBe(8);
});

test('first missing positive 5', () => {
  expect(firstMissingPositive([])).toBe(1);
});

test('first missing positive 2 way 1', () => {
  expect(firstMissingPositive2Way([1, 2, 0])).toBe(3);
});

test('first missing positive 2 way 2', () => {
  expect(firstMissingPositive2Way([3, 4, -1, 1])).toBe(2);
});

test('first missing positive 2 way 3', () => {
  expect(firstMissingPositive2Way([7, 8, 9, 11, 12])).toBe(1);
});

test('first missing positive 2 way 4', () => {
  expect(firstMissingPositive2Way([1, 2, 3, 4, 5, 6, 7])).toBe(8);
});

test('first missing positive 2 way 5', () => {
  expect(firstMissingPositive2Way([])).toBe(1);
});
