import React, { useReducer } from 'react'
import Navbar from '../Navbar'
import Scroll from '../Scroll'
import Cal_logic from './Cal_logic'

export default function Calculator() {
    const initialState = {x:3 , y: 2, result:""}
    const [state, dispatch] = useReducer(Cal_logic, initialState)
    
    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <div class="calculator-main">
                        <span class="cal-display">{state.result}</span>
                        <div class="cal-button">
                            <button onClick={() => { dispatch({ type: '+' }) }}>+</button>
                            <button onClick={() => { dispatch({ type: '-' })}}>-</button>
                            <button onClick={() => { dispatch({ type: '*' })}}>*</button>
                            <button onClick={() => { dispatch({ type: '/' })}}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
