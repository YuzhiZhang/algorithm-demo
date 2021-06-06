import {
  restoreIpAddresses,
  restoreIpAddresses2Way,
} from './RestoreIpAddresses';

test('restore ip addresses', () => {
  expect(restoreIpAddresses('25525511135')).toEqual([
    '255.255.11.135',
    '255.255.111.35',
  ]);
});

test('restore ip addresses 2 way', () => {
  expect(restoreIpAddresses2Way('25525511135')).toEqual([
    '255.255.11.135',
    '255.255.111.35',
  ]);
});
