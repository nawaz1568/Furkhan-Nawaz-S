
class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "sub":
        return this.a - this.b;
      case "mul":
        return this.a * this.b;
      case "div":
        if (this.b === 0) {
          return "Division by zero is not allowed";
        }
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}

const operations = ["add", "sub", "mul", "div"];

operations.forEach(op => {
  const calc = new Calculator(10, 5, op);
  console.log(`Operation (${op}):`, calc.calculate());
});

