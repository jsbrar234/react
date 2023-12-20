import React from 'react'
import Navbar from './Navbar'
import Scroll from './Scroll'

export default function Hello() {
  return (
    <>
      <Navbar />
      <div class="row">
        <div class="col-lg-3">
          <Scroll />
        </div>
        <div class="col-lg-9">
          <div className='hello-msg'>
            <h1>HELLO WORLD!</h1>
            <p>
              WE ARE GOING TO LEARN REACT JS
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
