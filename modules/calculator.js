class Calculator{
    static compute = (args, operate, initial) => {
        let sum = initial
        for (const index in args) {
            sum = operate(sum, args[index])
        }

        return sum
    }

    static add() {
        const args = arguments
      
        return Calculator.compute(args, (x,y) => x+y, 0)
    }

    static minus(){
        const args = arguments
      
        return Calculator.compute(args, (x,y) => x-y, args[0]*2)
    }

    static multiply(){
        const args = arguments
      
        return Calculator.compute(args, (x,y) => x*y, 1)
    }

    static divide(){
        const args = arguments
      
        return Calculator.compute(args, (x,y) => x/y, args[0]**2)
    }
}

export default Calculator