export type OperationSymbol = "+" | "-" | "*" | "/";

export class Calculator {
    result: number;
    historyResult: Array<number>;
    message: string;

    
    constructor() {
        this.result = 0;
        this.message = "";
        this.historyResult = [];
    }

    private sum(x: number, y: number): number {
        this.result = x + y;
        this.historyResult.push(this.result);
        return x + y;
    }

    private subtract(x: number, y: number): number {
        this.result = x - y;
        this.historyResult.push(this.result);
        return x - y;
    }

    private multiply(x: number, y: number): number {
        this.result = x * y;
        this.historyResult.push(this.result);
        return x * y;
    }

    private divide(x: number, y: number): number {
        this.result = x / y;
        this.historyResult.push(this.result);
        this.message = y === 0 ? "don't divisible for cero 🤨" : "";
        return x / y;
    }

    public calculate(x: number, y: number, op: OperationSymbol): number {
        switch (op) {
            case "+":
                return this.sum(x, y);
            case "-":
                return this.subtract(x, y);
            case "*":
                return this.multiply(x, y);
            case "/":
                return this.divide(x, y);
            default:
                throw new Error("Not valid operation");
        }
    }

    weightCalculator(weight: number): string {
        if (weight > 0) {
            this.message = "TAS BIEN GORDO BAJA DE PESO CERDA 😎";
        }
        return "Tu peso es: " + weight + (weight > 50 ? " 🤨🐳" : "🤨🐘");
    }

    public static main(): void {
        let calculator = new Calculator();
        console.log(calculator.calculate(2, 3, "+"));
        console.log(calculator.calculate(2, 3, "-"));
        console.log(calculator.calculate(2, 3, "*"));
        console.log(calculator.calculate(1, 0, "/"));
        console.log(calculator.message);
        console.log("Ultimo resultado: " + calculator.result);
        console.log("Historial de resultados: " + calculator.historyResult);
        console.log(calculator.weightCalculator(60));
    }
}

Calculator.main();
