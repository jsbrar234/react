import React, { useState } from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'




export default function Adv_counter() {
    const [list, setList] = useState(0)
    console.log('list', list)
    const [data, setData] = useState(0)
    console.log("data", data)
    const [val, setval] = useState(0);


    const [change, setchange] = useState(1);

    const getInp = (e) => {

        if (e === 0) {
            setval(0)
        }
        else {

            if (e.target.value >= 0) {
                setval(parseInt(e.target.value))
                setchange(parseInt(e.target.value))
            }
            else {
                const dis = "disabled";
            }
        }

    }
    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3">
                    <Scroll />
                </div>
                <input type="text" name="list" onChange={(e) => setList(parseInt(e.target.value))} />
                <button type=" button"

                    onClick={() => {
                        if (list) {
                            setData(data + list)
                        } else {
                            setData(data + 1)
                        }
                    }
                    }

                >inc</button>
                <p>{data}</p>
                <button type="button"
                    disabled={data < list}
                    onClick={() => {
                        if (list) {

                            setData(data - list)
                        } else {
                            setData(data - 1)

                        }
                    }
                    }
                >dec</button>
                <div class="col-lg-9">
                    <div className='counter-main'>
                        <div className='counter-input'>
                            <input type="number" min={0} onChange={getInp} placeholder="Enter Number" />
                        </div>
                        <div class="counter-function">
                            <button onClick={() => { getInp(0); setval(val - change) }}
                            disabled={val == change } >DECREMENT</button>
                            <span>{val}</span>
                            <button onClick={() => { getInp(0); setval(val + change) }}>INCREMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
