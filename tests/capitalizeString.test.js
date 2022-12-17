import { capitalizeString } from "../modules/funtions.js";

test('upper case', () => {
    expect(capitalizeString('yes')).toBe('YES')
})