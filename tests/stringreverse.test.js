import { reverseString } from '../modules/funtions';

test('only strings', () => {
  const nonStrings = {
    numbers: [2, 3, 0, -3, 45, 7],
    null: null,
    arrays: [],
    objects: {},
  };

  const keys = Object.keys(nonStrings);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key === 'numbers') {
      nonStrings[key].forEach((number) => expect(() => reverseString(number)).toThrow(Error));
    } else {
      expect(() => reverseString(nonStrings[key])).toThrow(Error);
    }
  }
});

test('length greater than one', () => {
  const strings = ['', 'qwerfvdcsckddksmjf'];

  strings.forEach((string) => expect(() => reverseString(string)).toThrow(Error));
});

test('returns number', () => {
  const properInputs = ['will', 'sam', ',', 'miles', 'kilo'];

  properInputs.forEach((string) => {
    expect(typeof reverseString(string)).toBe('string');
  });
});

test('correct string', () => {
  const properInputs = {
    hello: 'olleh',
    'we love us': 'su evol ew',
    i: 'i',
    write: 'etirw',
  };

  const keys = Object.keys(properInputs);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    expect(reverseString(key)).toBe(properInputs[key]);
  }
});