import { callPoints } from './CalPoints';
test('cal points', () => {
  expect(callPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
  expect(callPoints(['+', '2', 'C', 'D', '+'])).toBe(0);
  expect(callPoints(['C', 'D', '2', 'D', '+'])).toBe(12);
  expect(callPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  expect(callPoints(['1'])).toBe(1);
});
