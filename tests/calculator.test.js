import Calculator from "../modules/calculator.js"

describe('adding number', () => {
    test('add two numbers', () => {
        expect(Calculator.add(3,5)).toBe(8)
    })

    test('add multiple numbers', () => {
        expect(Calculator.add(1,2,3,4,5)).toBe(15)
    })
})

describe('subtracting numbers', () => {
    test('add two numbers', () => {
        expect(Calculator.minus(3,5)).toBe(-2)
    })

    test('add multiple numbers', () => {
        expect(Calculator.minus(0,1,2,3,4,5)).toBe(-15)
    })
})

describe('multiply numbers', () => {
    test('multiply two numbers', () => {
        expect(Calculator.multiply(3,5)).toBe(15)
    })

    test('multiply multiple numbers', () => {
        expect(Calculator.multiply(1,2,3,4,5)).toBe(120)
    })
})

describe('divide numbers', () => {
    test('divide two numbers', () => {
        expect(Calculator.divide(20,5)).toBe(4)
    })

    test('divide multiple numbers', () => {
        expect(Calculator.divide(30,5,2)).toBe(3)
    })
})
