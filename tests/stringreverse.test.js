import { reverseString } from "../modules/funtions.js";

test('only strings', () => {
    let nonStrings = {
      numbers: [2,3,0,-3,45,7],
      null: null,
      arrays: [],
      objects: {}
    }
  
    for (const key in nonStrings) {
      if (key === 'numbers'){
          nonStrings[key].forEach(number => expect(() => reverseString(number)).toThrow(Error))
      } else {
        expect(() => reverseString(nonStrings[key])).toThrow(Error);
      }    
    }
});
  
test('length greater than one', () => {
    let strings = ['', 'qwerfvdcsckddksmjf']

    strings.forEach(string => expect(() => reverseString(string)).toThrow(Error))
})

test('returns number', () => {
    const properInputs = ['will', 'sam', ',', 'miles', 'kilo']
  
    properInputs.forEach(string => {
      expect(typeof reverseString(string)).toBe('string')
    });
})

test('correct string', () => {
    const properInputs = {
        'hello':'olleh',
        'we love us': 'su evol ew',
        'i': 'i',
        'write': 'etirw'
    }

    for (const key in properInputs) {
        expect(reverseString(key)).toBe(properInputs[key])
    }
})