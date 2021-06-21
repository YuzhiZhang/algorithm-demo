import { maximalRectangleWay1 } from './MaximalRectangle';

test('maximal rectangle', () => {
  expect(
    maximalRectangleWay1([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ])
  ).toBe(6);
  expect(maximalRectangleWay1([])).toBe(0);
  expect(maximalRectangleWay1([['0']])).toBe(0);
  expect(maximalRectangleWay1([['1']])).toBe(1);
  expect(maximalRectangleWay1([['0', '0']])).toBe(0);
});
