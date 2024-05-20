import React from 'react'
import Navbar from '../commonComponent/Navbar'
import Scroll from '../commonComponent/Scroll'

export default function home() {
    return (
        <>

            <Navbar />
            <section>
                <div class="scroll-main">
                    <div class="row">
                        <div class="col-lg-3">
                            <Scroll />
                        </div>

                        <div class="col-lg-9">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
