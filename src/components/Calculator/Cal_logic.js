import React from 'react'

export default function Cal_logic(state, action) {
    console.log("state", state)
    
    switch (action.type) {
        case '+':
           
            return {
                result: state.x + state.y,
            }
            break;
        case '-':
            return {
                result: state.x - state.y
            }

            break;
        case '*':
            return {
                result: state.x * state.y
            }

            break;
        case '/':
            return {
                result: state.x / state.y
            }

            break;
        default:
            break;
    }
}
