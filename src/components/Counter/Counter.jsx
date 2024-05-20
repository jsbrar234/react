import React, { useReducer, useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'
import { reducer } from '../Use_reducer/commonreducer';
import Use_reducer from '../Use_reducer/Use_reducer';

export default function inc_dec() {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <Navbar />
      <div class="row">
        <div class="col-lg-3">
          <Scroll />
        </div>
        <div class="col-lg-9">
          <div class="counter-main">
            <button onClick={() => { setCount(count - 1) }}>DECREMENT</button>
            <span>{count}</span>
            <button onClick={() => { setCount(count + 1) }}>INCREMENT</button>
          </div>
        </div>
      </div>
      <Use_reducer />
    </>
  )
}
