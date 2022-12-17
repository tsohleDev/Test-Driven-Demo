import { capitalizeString } from '../modules/funtions';

test('upper case', () => {
  expect(capitalizeString('yes')).toBe('YES');
});