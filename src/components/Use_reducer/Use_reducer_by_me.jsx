import React, { useReducer } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'
import { Common_reducer_by_me } from './Common_reducer_by_me'

export default function Use_reducer_by_me() {
    const [state, dispatch] = useReducer(Common_reducer_by_me, { age: 42 })
    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <div className='use-context-main'>
                        <h1>COUNTER USING USE REDUCER</h1>
                        <div class="counter-main">
                            <button onClick={() => {
                                dispatch({ type: 'DECREMENT' })
                            }}>DECREMENT</button>
                            <span>{ state.age }</span>
                            <button onClick={() => {
                                dispatch({ type: 'INCREMENT' })
                            }}>INCREMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
