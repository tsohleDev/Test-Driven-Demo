class Calculator {
    static compute = (args, operate, initial) => {
      let sum = initial;
      Object.values(args).forEach((value) => { sum = operate(sum, value); });

      return sum;
    }

    static add(...args) {
      return Calculator.compute(args, (x, y) => x + y, 0);
    }

    static minus(...args) {
      return Calculator.compute(args, (x, y) => x - y, args[0] * 2);
    }

    static multiply(...args) {
      return Calculator.compute(args, (x, y) => x * y, 1);
    }

    static divide(...args) {
      return Calculator.compute(args, (x, y) => x / y, args[0] ** 2);
    }
}

export default Calculator;