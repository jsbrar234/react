import React, { useEffect, useReducer, useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'
import { Get_data } from './Get_data'




export default function Simple_input() {

    const [operand1, setOperand1] = useState("");
    const [update, setUpdate] = useState("")

    const [err,seterr] = useState("")

    // const check = (e) => {
    //     if(e.target.value>2){
    //         seterr(null);
    //     }
    //     else{
    //         seterr("ERROR")
    //     }
    // }

    const both = (e) => {
        setOperand1(e.target.value)
        if(e.target.value.length>2){
            seterr(null);
        }
        else{
            seterr("ERROR")
        }
    }
    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <input type="text" value={operand1} onChange={both} />
                    <span>{err}</span>
                    <button onClick={() =>setUpdate(operand1)}>SHOW</button>

                    {update}

                </div>
            </div>
        </>
    )
}
