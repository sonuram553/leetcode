export function evalRPN(tokens) {
  const stack = [];
  const operators = "+-*/";

  for (const token of tokens) {
    if (operators.includes(token)) {
      const rightOperand = stack.pop();
      const leftOperand = stack.pop();
      let val;

      switch (token) {
        case "+":
          val = leftOperand + rightOperand;
          break;
        case "-":
          val = leftOperand - rightOperand;
          break;
        case "*":
          val = leftOperand * rightOperand;
          break;
        case "/":
          val = leftOperand / rightOperand;
          val = val < 0 ? Math.ceil(val) : Math.floor(val);
      }

      stack.push(val);
    } else stack.push(Number(token));
  }

  return stack.pop();
}
