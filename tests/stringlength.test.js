import { stringLength } from "../modules/funtions.js";

test('only strings', () => {
  let nonStrings = {
    numbers: [2,3,0,-3,45,7],
    null: null,
    arrays: [],
    objects: {}
  }

  for (const key in nonStrings) {
    if (key === 'numbers'){
        nonStrings[key].forEach(number => expect(() => stringLength(number)).toThrow(Error))
    } else {
      expect(() => stringLength(nonStrings[key])).toThrow(Error);
    }    
  }
});

test('length greater than one', () => {
    let strings = ['', 'qwerfvdcsckddksmjf']

    strings.forEach(string => expect(() => stringLength(string)).toThrow(Error))
})

test('returns number', () => {
  const properInputs = ['will', 'sam', ',', 'miles', 'kilo']

  properInputs.forEach(string => {
    expect(typeof stringLength(string)).toBe('number')
  });
})

