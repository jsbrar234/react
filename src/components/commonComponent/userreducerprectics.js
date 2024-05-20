


export function reducer(state, action) {
    console.log('state', state)
  const operand1 = parseInt(action.operand1 );
  const operand2 = parseInt(action.operand2 );
const value = action?.value 
//   if (isNaN(operand1) || isNaN(operand2)) return initialState;

  switch (action.operator) {
    case "SUM":
      return {
        value: operand1 + operand2
      };
    case "DIFFERENCE":
      return {
        value: operand1 - operand2
      };
    case "PRODUCT":
      return {
        value: operand1 * operand2
      };
    case "QUOTIENT":
      return {
        value: operand1 / operand2
      };
    case "EXPONENTIATION":
      return {
        value: Math.pow(operand1, operand2)
      };
    default:
      return state;
  }
}
