import React, { useReducer } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'
import { reducer } from './commonreducer';
import Common_reducer_by_me from './Common_reducer_by_me';

export default function Use_reducer() {
  

  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <Navbar />
      <div class="row">
        <div class="col-lg-3"><Scroll /></div>

        <div class="col-lg-9">
          <div className='use-context-main'>
            <button onClick={() => {
              dispatch({ type: 'incremented_age' })
            }}>
              Increment age
            </button>
            <button onClick={() => {
              dispatch({ type: 'decrement_age' })
            }}>
              Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
          </div>
        </div>
      </div>
    </>
  )
}


