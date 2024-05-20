import React, { useState, useReducer, useEffect } from "react";

import { reducer } from "../commonComponent/userreducerprectics"

const initialState = { value: "" };
export default function SimpleForm() {

  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("SUM");
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('operand1', operand1)
  console.log('operand2', operand2)
  console.log('operator', operator)

  useEffect(() => {
    dispatch({ operator, operand1, operand2 });
  }, [operand1, operand2, operator]);

  return (
    <div className="App">
      <h1>Calculator using react useReducer</h1>
      <div className="form">

        <input
          type="number"
          value={operand1}
          onChange={(e) => setOperand1(e.target.value)}
        />


        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="SUM">+</option>
          <option value="DIFFERENCE">-</option>
          <option value="PRODUCT">*</option>
          <option value="QUOTIENT">/</option>
          <option value="EXPONENTIATION">^</option>
        </select>


        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
        />


      </div>
      {state.value && <h2> result: {state.value}</h2>}
    </div>
  );
}
